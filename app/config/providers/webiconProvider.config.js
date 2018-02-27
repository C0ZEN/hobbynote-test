/**
 * Generated header by Geoffrey TESTELIN for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey TESTELIN
 * Date: 27/02/2018
 * Time: 22:26
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.config(provider);

	provider.$inject = [
		'$webiconProvider'
	];

	function provider($webiconProvider) {
		$webiconProvider
			.svgSet('bomb', 'images/svg/bomb.svg')
			.alias('bomb', 'bomb')
			.icon('bomb', 'images/svg/bomb.svg');
	}

})(window.angular);