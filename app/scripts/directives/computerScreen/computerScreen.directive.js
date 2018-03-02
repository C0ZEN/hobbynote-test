/**
 * Generated header by Geoffrey Testelin for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 01/03/2018
 * Time: 19:52
 * Version: 0.0.0
 *
 * @ngdoc directive
 * @name hobbynoteTestApp.directive:computer-screen
 * @scope
 * @restrict
 * @replace false
 * @transclude false
 *
 * @description
 *
 * [Scope params, one-way binding]
 * @param {string}  computerScreenText              > Text to display on the screen of the computer
 * @param {boolean} computerScreenWaitInput = false > Display or hide a cursor to show that the user can write something
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
		.directive('computerScreen', computerScreen);

	computerScreen.$inject = [
		'_',
		'$timeout',
		'$window'
	];

	function computerScreen(_, $timeout, $window) {
		return {
			link,
			restrict        : '',
			replace         : false,
			transclude      : false,
			scope           : {
				computerScreenText     : '@',
				computerScreenWaitInput: '@'
			},
			templateUrl     : 'scripts/directives/computerScreen/computerScreen.template.html',
			bindToController: true,
			controller      : 'computerScreenController',
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
					scope.vm.data.isReady = true;
				}, 100);

				// computerScreenWaitInput
				if (!_.isBoolean(scope.vm.computerScreenWaitInput)) {
					scope.vm.computerScreenWaitInput = false;
				}

				// Listen the resize event
				$window.addEventListener('resize', methods.resize);

				// Destroy listeners
				element.on('$destroy', methods.destroy);
				scope.vm.data.listeners.push(scope.$on('$destroy', methods.destroy));
			}

			function destroy() {
				element.off('$destroy', methods.destroy);
				$window.removeEventListener('resize', methods.resize);
				$window.removeEventListener('keydown', scope.vm.methods.onKeyDown);
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