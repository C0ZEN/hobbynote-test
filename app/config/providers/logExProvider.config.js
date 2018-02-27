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
		'logExProvider',
		'config'
	];

	function provider(logExProvider, config) {
		logExProvider.enableLogging(config.debug.logs.enabled);
        logExProvider.disableDefaultColors(!config.debug.logs.enhancedColors);
        logExProvider.overrideLogPrefix(function (className) {
            const $injector       = angular.injector(['ng']);
            const $filter         = $injector.get('$filter');
            const separator       = config.debug.logs.separator;
            const classNameBefore = config.debug.logs.classNameBefore;
            const classNameAfter  = config.debug.logs.classNameAfter;
            const format          = config.debug.logs.format;
            const now             = String($filter('date')(new Date(), format));
            return now + (!angular.isString(className) ? '' : classNameBefore + className + classNameAfter + separator);
        });
        logExProvider.restrictLogMethods(config.debug.logs.restrictedMethods);
        logExProvider.useTemplates(true);
	}

})(window.angular);