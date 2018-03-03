/**
 * Generated header by Geoffrey Testelin for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 27/02/2018
 * Time: 22:45
 * Version: 0.0.0
 *
 * @ngdoc controller
 * @name hobbynoteTestApp.controller:bombScreenController
 * @function
 * @description
 *
 */
(function (angular) {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.controller('bombScreenController', bombScreenController);

	bombScreenController.$inject = [
		'$scope',
		'$element',
		'$attrs',
		'screenService',
		'domService',
		'moment'
	];

	function bombScreenController($scope, $element, $attrs, screenService, domService, moment) {
		const vm = this;

		vm.methods = {
			definePosition,
			setStyles,
			onStartLive
		};

		vm.data = {
			controller: 'bombScreenController',
			directive : 'bombScreen',
			listeners : [],
			styles    : {
				top   : 0,
				left  : 0,
				height: 0,
				width : 0
			},
			timer     : null
		};

		function definePosition() {
			const screen = screenService.getDomScreen();
			if (screen && 0 < screen.length) {
				const screenBounding  = domService.getBounding(screen);
				vm.data.styles.top    = screenBounding.top + 65 * screenBounding.height / 100;
				vm.data.styles.left   = screenBounding.left + 28 * screenBounding.width / 100;
				vm.data.styles.height = 11.5 * screenBounding.height / 100;
				vm.data.styles.width  = 12 * screenBounding.width / 100;
				vm.methods.setStyles();
			}
		}

		function setStyles() {
			$element.css(vm.data.styles);
		}

		function onStartLive($event, $data) {
			vm.data.timer = moment().add($data.time, 's').toString();
		}
	}

})(window.angular);