'use strict';

/* eslint-env angular, browser */

(() => {
  function NewGameFormController(ProjectService) {
    const vm = this;

    vm.$onInit = function onInit() {
      vm.clear();
    };

    vm.createGame = function createGame() {
      // TK validate
      // TK display working spinner
      ProjectService.createProject(vm.game)
        .then((response) => {
          console.log(response); // eslint-disable-line
        });
      //   on good, alert and dismiss
      //   on bad, alert
      vm.clear();
    };

    vm.clear = function clear() {
      vm.game = {};
    };
  }

  NewGameFormController.$inject = ['ProjectService'];

  angular.module('ashcan').component('newGameForm', {
    controller: NewGameFormController,
    templateUrl: '/tmpl/newgameform.html'
  });
})();
