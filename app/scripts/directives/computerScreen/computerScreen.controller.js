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
		'domService'
	];

	function computerScreenController($scope, $element, $attrs, screenService, domService) {
		const vm = this;

		vm.methods = {
			definePosition,
			setStyles
		};

		vm.data = {
			controller: 'computerScreenController',
			directive : 'computerScreen',
			listeners : [],
			styles    : {
				top   : 0,
				left  : 0,
				height: 0,
				width : 0
			},
			isReady   : false
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
	}

})(window.angular);