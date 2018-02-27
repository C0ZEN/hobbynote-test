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
		'$document',
		'$window'
	];

	function bombScreenController($scope, $element, $attrs, $document, $window) {
		const vm = this;

		vm.methods = {
			getDomBomb,
			definePosition
		};

		vm.data = {
			controller: 'bombScreenController',
			directive : 'bombScreen',
			listeners : []
		};

		function getDomBomb() {
			return angular.element($document).find('webicon.bomb image');
		}

		function definePosition() {
			const bomb = vm.methods.getDomBomb();
			if (bomb) {
				const bombStyles   = $window.getComputedStyle(bomb[0], null);
				const bombBounding = bomb[0].getBoundingClientRect();
			}
		}
	}

})(window.angular);