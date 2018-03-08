/**
 * Generated header by Geoffrey Testelin for hobbynote-test-app project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 27/02/2018
 * Time: 22:11
 * Version: 0.0.0
 *
 * @ngdoc controller
 * @name hobbynoteTestApp.controller:mainController
 * @function
 * @description
 *
 */
(function (angular) {
	'use strict';

	angular
		.module('hobbynoteTestApp')
		.controller('mainController', mainController);

	mainController.$inject = [
		'_',
		'$scope',
		'$log',
		'$rootScope'
	];

	function mainController(_, $scope, $log, $rootScope) {
		const vm = this;

		vm.methods = {
			initMode,
			destroy,
			vjsVideoReady,
			showExplosion
		};

		vm.data = {
			bombScreenText         : '',
			bombScreenTimer        : null,
			bombScreenDefuseCode   : null,
			computerScreenText     : '',
			computerScreenWaitInput: false,
			listeners              : [],
			showExplosion          : false
		};

		vm.methods.initMode();

		vm.data.listeners.push($scope.$on('vjsVideoReady', vm.methods.vjsVideoReady));
		vm.data.listeners.push($rootScope.$on('showExplosion', vm.methods.showExplosion));
		vm.data.listeners.push($scope.$on('$destroy', vm.methods.destroy));

		function initMode() {
			vm.data.bombScreenText          = '--:--';
			vm.data.bombScreenTimer         = null;
			vm.data.computerScreenText      = 'Le jeu va bientôt démarrer';
			vm.data.computerScreenWaitInput = true;
		}

		function destroy() {
			_.forEach(vm.data.listeners, $listener => {
				$listener();
			});
		}

		function vjsVideoReady($event, $data) {
			$log.log($data);
		}

		function showExplosion() {
			vm.data.showExplosion = true;
		}
	}

})(window.angular);