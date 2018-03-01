/**
 * A directive for AngularJS that makes an effect akin to text being typed on a computer terminal.
 *
 * Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
 */
(function () {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.directive('dirTerminalType', dirTerminalType);

	dirTerminalType.$inject = [
		'$window',
		'$document',
		'$timeout',
		'$interpolate',
		'$parse'
	];

	function dirTerminalType($window, $document, $timeout, $interpolate, $parse) {

		/**
		 * requestAnimationFrame polyfill from http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		 */
		(function () {
			let lastTime  = 0;
			const vendors = ['webkit',
				'moz'];
			for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
				window.cancelAnimationFrame  =
					window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
			}

			if (!window.requestAnimationFrame) {
				window.requestAnimationFrame = function (callback, element) {
					const currTime   = new Date().getTime();
					const timeToCall = Math.max(0, 16 - (currTime - lastTime));
					const id         = window.setTimeout(function () { callback(currTime + timeToCall); },
						timeToCall);
					lastTime         = currTime + timeToCall;
					return id;
				};
			}

			if (!window.cancelAnimationFrame) {
				window.cancelAnimationFrame = function (id) {
					clearTimeout(id);
				};
			}
		}());

		/**
		 * Recursively traverse the node tree and set the nodeValue of any text nodes to '', whilst
		 * storing the original value in the newly-created field _originalNodeValue for later use.
		 *
		 * @param node
		 * @param totalChars
		 * @param originalNodeValues
		 * @returns {number}
		 */
		function clearTextAndStoreValues(node, totalChars, originalNodeValues) {
			let i;
			totalChars = totalChars || 0;

			if (node.nodeValue !== null) {
				const nodeValue = node.nodeValue.replace(/\s+/g, ' ');
				originalNodeValues.values.push(nodeValue);
				node.nodeValue = '';
				totalChars += nodeValue.length;
			}

			for (i = 0; i < node.childNodes.length; i++) {
				totalChars = clearTextAndStoreValues(node.childNodes[i], totalChars, originalNodeValues);
			}

			return totalChars;
		}

		/**
		 * Update the nodeValues of any text nodes within element, filling in the corresponding
		 * amount of characters commensurate with the current progress.
		 *
		 * @param element
		 * @param currentIteration
		 * @param totalIterations
		 * @param totalChars
		 * @param originalNodeValues
		 * @returns {boolean}
		 */
		function type(element, currentIteration, totalIterations, totalChars, originalNodeValues) {
			const currentChar = Math.ceil(currentIteration / totalIterations * totalChars);

			const charsTyped = typeUpToCurrentChar(element, currentChar, 0, originalNodeValues, true);

			let done = totalChars <= charsTyped;
			return done;
		}

		/**
		 * Recursive function that traverses a node tree and updates the nodeValue of each
		 * text node until the total number of characters "typed" is equal to the value
		 * of currentChar.
		 *
		 * @param node
		 * @param currentChar
		 * @param charsTyped
		 * @param originalNodeValues
		 * @param resetCounter
		 * @returns {*}
		 */
		function typeUpToCurrentChar(node, currentChar, charsTyped, originalNodeValues, resetCounter) {

			if (resetCounter) {
				originalNodeValues.counter = 0;
			}

			if (node.nodeValue !== null) {
				const originalValue = originalNodeValues.values[originalNodeValues.counter];
				if (currentChar - charsTyped < originalValue.length) {
					const charsToType = currentChar - charsTyped;
					node.nodeValue    = originalValue.substring(0, charsToType);
					charsTyped += charsToType;
				}
				else {
					node.nodeValue = originalValue;
					charsTyped += originalValue.length;
				}

				originalNodeValues.counter++;
			}

			for (let i = 0; i < node.childNodes.length; i++) {
				if (charsTyped < currentChar) {
					charsTyped = typeUpToCurrentChar(node.childNodes[i], currentChar, charsTyped, originalNodeValues);
				}
				else {
					break;
				}
			}

			return charsTyped;
		}

		/**
		 * Add the caret to the end of the element, and style it to fit the text.
		 * First line checks if a caret already exists, in which case do nothing.
		 *
		 * @param element
		 */
		function addCaret(element) {
			const elementAlreadyHasCaret = element[0].querySelector('.dirTerminalType-caret') !== null;

			if (!elementAlreadyHasCaret) {
				let height            = parseInt($window.getComputedStyle(element[0])['font-size']);
				height -= 2; // make it a bit smaller to prevent it interfering with document flow.
				const backgroundColor = $window.getComputedStyle(element[0])['color'];
				const width           = Math.ceil(height * 0.05);
				const marginBottom    = Math.ceil(height * -0.1);
				const caret           = $document[0].createElement('span');
				caret.classList.add('dirTerminalType-caret');
				caret.style.height          = height + 'px';
				caret.style.width           = width + 'px';
				caret.style.backgroundColor = backgroundColor;
				caret.style.marginBottom    = marginBottom + 'px';
				element.append(caret);
			}
		}

		function removeCaret(element) {
			const caret = element[0].querySelector('.dirTerminalType-caret');
			angular.element(caret).remove();
		}

		/**
		 * If any of the text nodes contain interpolation expressions {{ like.this }}, we need to
		 * interpolate them to get the actual value to be displayed. This will change the
		 * totalChars count so that must also be updated.
		 *
		 * @param node
		 * @param scope
		 * @param totalChars
		 * @param originalNodeValues
		 * @param resetCounter
		 */
		function interpolateText(node, scope, totalChars, originalNodeValues, resetCounter) {
			let i,
				currentNodeContent,
				currentLength,
				interpolatedContent,
				interpolatedLength,
				lengthDelta;

			if (resetCounter) {
				originalNodeValues.counter = 0;
			}

			if (node.nodeValue !== null) {
				currentNodeContent  = originalNodeValues.values[originalNodeValues.counter];
				currentLength       = currentNodeContent.length;
				interpolatedContent = $interpolate(currentNodeContent)(scope);
				interpolatedLength  = interpolatedContent.length;

				lengthDelta                                           = interpolatedLength - currentLength;
				totalChars += lengthDelta;
				originalNodeValues.values[originalNodeValues.counter] = interpolatedContent;

				originalNodeValues.counter++;
			}

			for (i = 0; i < node.childNodes.length; i++) {
				totalChars = interpolateText(node.childNodes[i], scope, totalChars, originalNodeValues);
			}

			return totalChars;
		}

		return {
			restrict: 'AE',
			link    : function (scope, element, attrs) {

				/**
				 * These two variables are used to store the original text values of any text nodes in the element. The original approach involved
				 * simply appending a new property onto the DOM node itself, but this proved to be a bad idea since it breaks in IE. This new approach
				 * is a little more complex since we now have to track the index of each text node in the originalNodeValues array.
				 * @type {Array}
				 */
				const originalNodeValues = {
					values : [],
					counter: 0
				};

				let totalChars = clearTextAndStoreValues(element[0], 0, originalNodeValues);

				let start, elapsed;
				const duration         = attrs.duration || 1000;
				const removeCaretAfter = attrs.removeCaret || 1000;
				const onCompletion     = $parse(attrs.onCompletion) || null;
				const forceCaret       = typeof attrs.forceCaret !== 'undefined';

				if (typeof attrs.startTyping !== 'undefined') {
					if (forceCaret) {
						addCaret(element);
					}
					scope.$watch(function () {
						return scope.$eval(attrs.startTyping);
					}, function (val) {
						if (val) {
							startTyping();
						}
					});
				}
				else {
					startTyping();
				}

				function startTyping() {
					addCaret(element);
					totalChars = interpolateText(element[0], scope, totalChars, originalNodeValues, true);
					window.requestAnimationFrame(tick);
				}

				/**
				 * This is the animation function that gets looped in a requestAnimationFrame call.
				 * @param timestamp
				 */
				function tick(timestamp) {
					let currentIteration, totalIterations, done;

					if (typeof start === 'undefined') {
						start = timestamp;
					}
					elapsed = timestamp - start;

					totalIterations  = Math.round(duration / 1000 * 60);
					currentIteration = Math.round(elapsed / 1000 * 60);
					done             = type(element[0], currentIteration, totalIterations, totalChars, originalNodeValues);

					if (elapsed < duration && !done) {
						window.requestAnimationFrame(tick);
					}
					else {
						$timeout(function () {
							removeCaret(element);
						}, removeCaretAfter);

						start = undefined;  // reset

						// if a callback was defined by the on-completion attribute, invoke it now
						if (onCompletion !== null) {
							onCompletion(scope);
						}
					}
				}
			}
		};
	}

})();