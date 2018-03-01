/**
 * Generated header by Geoffrey Testelin for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 01/03/2018
 * Time: 14:20
 * Version: 0.0.0
 *
 * @ngdoc service
 * @name hobbynoteTestApp.screenService
 *
 * @description
 *
 */
(function (angular) {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.factory('screenService', screenService);

	screenService.$inject = [
		'$document'
	];

	function screenService($document) {
		return {
			getDomScreen
		};

		function getDomScreen() {
			return angular.element($document).find('webicon.bomb image');
		}
	}

})(window.angular);