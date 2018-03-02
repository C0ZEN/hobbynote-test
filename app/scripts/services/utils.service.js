/**
 * Generated header by Geoffrey Testelin for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 02/03/2018
 * Time: 21:04
 * Version: 0.0.0
 *
 * @ngdoc service
 * @name hobbynoteTestApp.utilsService
 *
 * @description
 *
 */
(function (angular) {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.factory('utilsService', utilsService);

	utilsService.$inject = [
		'_'
	];

	function utilsService(_) {
		return {
			safeApply
		};

		function safeApply($scope, $callback) {
			let phase = $scope.$root;
			if (!_.isNull(phase) && !_.isUndefined(phase)) {
				phase = phase.$$phase;
				if ('$apply' === phase || '$digest' === phase) {
					if (_.isFunction($callback)) {
						$callback();
					}
				}
				else {
					$scope.$apply($callback);
				}
			}
		}
	}

})(window.angular);