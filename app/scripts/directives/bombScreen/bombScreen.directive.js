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
 * @param {string} bombScreenText       > Text to display on the screen of the bomb
 * @param {string} bombScreenTimer      > Time until explosion
 * @param {string} bombScreenDefuseCode > Code for defusing the bomb
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
		'_',
		'$timeout',
		'$window'
	];

	function bombScreen(_, $timeout, $window) {
		return {
			link,
			restrict        : 'E',
			replace         : false,
			transclude      : false,
			scope           : {
				bombScreenText      : '@',
				bombScreenTimer     : '@',
				bombScreenDefuseCode: '@'
			},
			templateUrl     : 'scripts/directives/bombScreen/bombScreen.template.html',
			bindToController: true,
			controller      : 'bombScreenController',
			controllerAs    : 'vm'
		};

		function link(scope, element, attrs) {
			const methods = {
				init,
				destroy,
				resize
			};

			methods.init();

			function init() {
				$timeout(function () {
					scope.vm.methods.definePosition();
				}, 100);

				// Listen the resize event
				$window.addEventListener('resize', methods.resize);

				// Destroy listeners
				element.on('$destroy', methods.destroy);
				scope.vm.data.listeners.push(scope.$on('$destroy', methods.destroy));
			}

			function destroy() {
				element.off('$destroy', methods.destroy);
				$window.removeEventListener('resize', methods.resize);
				_.forEach(scope.vm.data.listeners, $listener => {
					$listener();
				});
			}

			function resize() {
				scope.vm.methods.definePosition();
			}
		}
	}

})(window.angular);