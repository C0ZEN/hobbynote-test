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

	mainController.$inject = [];

	function mainController() {
		const vm = this;

		vm.methods = {
			initMode
		};

		vm.data = {
			bombScreenText         : '',
			bombScreenTimer        : null,
			bombScreenDefuseCode   : null,
			computerScreenText     : '',
			computerScreenWaitInput: false
		};

		vm.methods.initMode();

		function initMode() {
			vm.data.bombScreenText          = '--:--';
			vm.data.bombScreenTimer         = null;
			vm.data.computerScreenText      = 'Le jeu va bientôt démarrer';
			vm.data.computerScreenWaitInput = true;
		}
	}

})(window.angular);