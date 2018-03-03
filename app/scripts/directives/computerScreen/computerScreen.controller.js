/**
 * Generated header by Geoffrey Testelin for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 01/03/2018
 * Time: 19:52
 * Version: 0.0.0
 *
 * @ngdoc controller
 * @name hobbynoteTestApp.controller:computerScreenController
 * @function
 * @description
 *
 */
(function (angular) {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.controller('computerScreenController', computerScreenController);

	computerScreenController.$inject = [
		'$scope',
		'$element',
		'$attrs',
		'screenService',
		'domService',
		'$timeout',
		'$window',
		'utilsService',
		'_',
		'$rootScope'
	];

	function computerScreenController($scope, $element, $attrs, screenService, domService, $timeout, $window, utilsService, _, $rootScope) {
		const vm = this;

		vm.methods = {
			definePosition,
			setStyles,
			onMainCompletion,
			onKeyDown,
			checkForKeyboardAction,
			startLive,
			createLiveValues,
			validText,
			onTextCompletion
		};

		vm.data = {
			controller     : 'computerScreenController',
			directive      : 'computerScreen',
			listeners      : [],
			styles         : {
				top   : 0,
				left  : 0,
				height: 0,
				width : 0
			},
			waitInputModel : null,
			isReady        : false,
			waitInputStyles: {
				width: 0
			},
			showStaticCaret: false,
			texts          : [],
			currentText    : '',
			showTexts      : false,
			showMainText   : true,
			regexp         : {
				startLive    : /(startlive\()[0-9]{1,}(,)( ){0,1}[0-9]{1,}(\))/gim,
				startLiveExec: /\d+/gim
			},
			isLive         : false
		};

		function definePosition() {
			const screen = screenService.getDomScreen();
			if (screen && 0 < screen.length) {
				const screenBounding  = domService.getBounding(screen);
				vm.data.styles.top    = screenBounding.top + 50 * screenBounding.height / 100;
				vm.data.styles.left   = screenBounding.left + 67 * screenBounding.width / 100;
				vm.data.styles.height = 38 * screenBounding.height / 100;
				vm.data.styles.width  = 25 * screenBounding.width / 100;
				vm.methods.setStyles();
			}
		}

		function setStyles() {
			$element.css(vm.data.styles);
		}

		function onMainCompletion() {
			vm.data.showTexts       = true;
			vm.data.showStaticCaret = true;
		}

		function onKeyDown($keyEvent) {
			if (vm.data.showStaticCaret) {
				switch ($keyEvent.keyCode) {
					case 8:
						vm.data.currentText = vm.data.currentText.slice(0, -1);
						break;
					case 13:
						vm.methods.validText($keyEvent.keyCode);
						break;
					case 32:
						vm.data.currentText += ' ';
						break;
					case 16:
					case 17:
					case 18:
					case 20:
					case 9:
					case 37:
					case 38:
					case 39:
					case 40:
					case 93:
						break;
					default:
						vm.data.currentText += $keyEvent.key;
						break;
				}
				utilsService.safeApply($scope);
			}
		}

		function checkForKeyboardAction($text) {
			if ($text.text.match(vm.data.regexp.startLive)) {
				if (vm.data.isLive) {
					vm.data.currentText = 'Le live a déjà commencé !';
					vm.methods.validText(null, 1000);
				}
				else {
					vm.methods.startLive(vm.methods.createLiveValues($text.text));
				}
			}
		}

		function createLiveValues($text) {
			let values = $text.match(vm.data.regexp.startLiveExec);
			values     = _.map(values, $value => {
				return parseInt($value, 10);
			});
			values     = {
				time      : values[0],
				defuseCode: values[1]
			};
			if (3600 < values.time) {
				values.time         = 3600;
				vm.data.currentText = 'Le timer max pour la bombe est de 3600 secondes';
				vm.methods.validText(null, 1000);
			}
			return values;
		}

		function startLive($values) {
			$rootScope.$broadcast('startLive', $values);
			vm.data.isLive      = true;
			vm.data.currentText = 'Le live a commencé !';
			vm.methods.validText(null, 1000);
		}

		function validText($keyCode, $duration) {
			let keyCode  = $keyCode;
			let duration = $duration;
			if (!_.isNumber(keyCode)) {
				keyCode = null;
			}
			if (!_.isNumber(duration)) {
				duration = 0;
			}
			if (keyCode === vm.data.texts.length) {
				vm.data.showMainText = false;
			}
			else if (keyCode === vm.data.texts.length) {
				vm.data.texts = _.tail(vm.data.texts);
			}
			vm.data.showStaticCaret = false;
			vm.data.texts.push({
				text       : angular.copy(vm.data.currentText),
				duration,
				removeCaret: 0 === duration ? 0 : 1000
			});
			vm.data.currentText = '';
			vm.methods.checkForKeyboardAction(_.last(vm.data.texts));
		}

		function onTextCompletion($index, $text) {
			if ($index + 1 === vm.data.texts.length) {
				$timeout(() => {
					vm.data.showStaticCaret = true;
				}, $text.removeCaret);
			}
		}
	}

})(window.angular);