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
		'$timeout'
	];

	function computerScreenController($scope, $element, $attrs, screenService, domService, $timeout) {
		const vm = this;

		vm.methods = {
			definePosition,
			setStyles,
			onWaitInputChange,
			onMainCompletion
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
			currentText    : null,
			showTexts      : false
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

		function onWaitInputChange() {
			$timeout(function () {
				vm.data.waitInputStyles.width = 9 * vm.data.waitInputModel.length;
			});
		}

		function onMainCompletion() {
			vm.data.showTexts       = true;
			vm.data.showStaticCaret = true;
		}
	}

})(window.angular);