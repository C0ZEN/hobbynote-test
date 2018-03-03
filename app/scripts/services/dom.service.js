/**
 * Generated header by Geoffrey Testelin for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 01/03/2018
 * Time: 19:53
 * Version: 0.0.0
 *
 * @ngdoc service
 * @name hobbynoteTestApp.domService
 *
 * @description
 *
 */
(function (angular) {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.factory('domService', domService);

	domService.$inject = [
		'$window'
	];

	function domService($window) {
		return {
			getStyles,
			getBounding
		};

		function getStyles($element) {
			if ($element && 0 < $element.length) {
				return $window.getComputedStyle($element[0], null);
			}
			return null;
		}

		function getBounding($element) {
			if ($element && 0 < $element.length) {
				return $element[0].getBoundingClientRect();
			}
			return null;
		}
	}

})(window.angular);