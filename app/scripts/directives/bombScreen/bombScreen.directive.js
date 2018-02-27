/**
 * Generated header by Geoffrey Testelin for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 27/02/2018
 * Time: 22:45
 * Version: 0.0.0
 *
 * @ngdoc directive
 * @name hobbynoteTestApp.directive:bomb-screen
 * @scope
 * @restrict E
 * @replace false
 * @transclude false
 *
 * @description
 *
 * [Scope params, one-way binding]
 * @param {string} bombScreenText > Text to display on the screen of the bomb
 *
 * [Scope params, two-way binding]
 *
 * [Attrs params]
 *
 */
(function (angular) {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.directive('bombScreen', bombScreen);

	bombScreen.$inject = [
		'_'
	];

	function bombScreen(_) {
		return {
			link,
			restrict        : 'E',
			replace         : false,
			transclude      : false,
			scope           : {
				bombScreenText: '@'
			},
			templateUrl     : 'scripts/directives/bombScreen/bombScreen.template.html',
			bindToController: true,
			controller      : 'bombScreenController',
			controllerAs    : 'vm'
		};

		function link(scope, element, attrs) {
			const methods = {
				init,
				destroy
			};

			methods.init();

			function init() {

				// Destroy listeners
				element.on('$destroy', methods.destroy);
				scope.vm.data.listeners.push(scope.$on('$destroy', methods.destroy));
			}

			function destroy() {
				element.off('$destroy', methods.destroy);
				_.forEach(scope.vm.data.listeners, $listener => {
					$listener();
				});
			}
		}
	}

})(window.angular);