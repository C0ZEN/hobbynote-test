/**
 * Generated header by Geoffrey TESTELIN for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey TESTELIN
 * Date: 27/02/2018
 * Time: 14:18
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.config(provider);

	provider.$inject = [
		'tmhDynamicLocaleProvider',
		'config'
	];

	function provider(tmhDynamicLocaleProvider, config) {
		tmhDynamicLocaleProvider
			.localeLocationPattern(config.localeLocationPattern);
	}

})(window.angular);