/**
 * Generated header by Geoffrey Testelin for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 27/02/2018
 * Time: 22:11
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.config(mainState);

	mainState.$inject = [
		'$stateProvider'
	];

	function mainState($stateProvider) {
		$stateProvider
			.state('main', {
				url         : '/main',
				templateUrl : 'views/main/main.template.html',
				controller  : 'mainController',
				controllerAs: 'vm'
			});
	}

})(window.angular);