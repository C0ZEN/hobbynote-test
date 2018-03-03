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
				window.requestAnimationFrame = function (callback) {
					const currTime   = new Date().getTime();
					const timeToCall = Math.max(0, 16 - (currTime - lastTime));
					const id         = window.setTimeout(
						() => {
							callback(currTime + timeToCall);
						},
						timeToCall
					);
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

		function clearTextAndStoreValues(node, totalChars, originalNodeValues) {
			let i;
			totalChars = totalChars || 0;

			if (null !== node.nodeValue) {
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

		function type(element, currentIteration, totalIterations, totalChars, originalNodeValues) {
			const currentChar = Math.ceil(currentIteration / totalIterations * totalChars);

			const charsTyped = typeUpToCurrentChar(element, currentChar, 0, originalNodeValues, true);

			const done = totalChars <= charsTyped;
			return done;
		}

		function typeUpToCurrentChar(node, currentChar, charsTyped, originalNodeValues, resetCounter) {

			if (resetCounter) {
				originalNodeValues.counter = 0;
			}

			if (null !== node.nodeValue) {
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

		function addCaret(element) {
			const elementAlreadyHasCaret = null !== element[0].querySelector('.dirTerminalType-caret');

			if (!elementAlreadyHasCaret) {
				let height            = parseInt($window.getComputedStyle(element[0])['font-size'], 10);
				height -= 2;
				const backgroundColor = $window.getComputedStyle(element[0]).color;
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

		function interpolateText(node, scope, totalChars, originalNodeValues, resetCounter) {
			let currentLength,
				currentNodeContent,
				i,
				interpolatedContent,
				interpolatedLength,
				lengthDelta;

			if (resetCounter) {
				originalNodeValues.counter = 0;
			}

			if (null !== node.nodeValue) {
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
			link(scope, element, attrs) {

				const originalNodeValues = {
					values : [],
					counter: 0
				};

				let totalChars = clearTextAndStoreValues(element[0], 0, originalNodeValues);

				let elapsed, start;
				const duration         = attrs.duration || 1000;
				const removeCaretAfter = attrs.removeCaret || 1000;
				const onCompletion     = $parse(attrs.onCompletion) || null;
				const forceCaret       = 'undefined' !== typeof attrs.forceCaret;

				if ('undefined' !== typeof attrs.startTyping) {
					if (forceCaret) {
						addCaret(element);
					}
					scope.$watch(() => {
						return scope.$eval(attrs.startTyping);
					}, val => {
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

				function tick(timestamp) {
					let currentIteration, done, totalIterations;

					if ('undefined' === typeof start) {
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
						$timeout(() => {
							removeCaret(element);
						}, removeCaretAfter);

						start = undefined;

						if (null !== onCompletion) {
							onCompletion(scope);
						}
					}
				}
			}
		};
	}

})();