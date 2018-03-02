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
		'_'
	];

	function computerScreenController($scope, $element, $attrs, screenService, domService, $timeout, $window, utilsService, _) {
		const vm = this;

		vm.methods = {
			definePosition,
			setStyles,
			onMainCompletion,
			onKeyDown,
			checkForKeyboardAction
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
			showMainText   : true
		};

		function definePosition() {
			const screen = screenService.getDomScreen();
			if (screen && screen.length > 0) {
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
			$window.addEventListener('keydown', vm.methods.onKeyDown);
		}

		function onKeyDown($keyEvent) {
			switch ($keyEvent.keyCode) {
				case 8:
					vm.data.currentText = vm.data.currentText.slice(0, -1);
					break;
				case 13:
					if (vm.data.texts.length === 9) {
						vm.data.showMainText = false;
					}
					else if (vm.data.texts.length === 10) {
						vm.data.texts = _.tail(vm.data.texts);
					}
					vm.data.texts.push(angular.copy(vm.data.currentText));
					vm.data.currentText = '';
					vm.methods.checkForKeyboardAction(_.last(vm.data.texts));
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

		function checkForKeyboardAction($text) {
			if ($text.match(/(startlive\\()[0-9]{1,}(,)( ){0,1}[0-9]{1,}(\\))/gim)) {
				
			}
		}
	}

})(window.angular);