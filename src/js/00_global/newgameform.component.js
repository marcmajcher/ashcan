'use strict';

/* eslint-env angular, browser */

(() => {
  function NewGameFormController() {
    const vm = this;

    vm.$onInit = function onInit() {};
  }

  angular.module('ashcan').component('newGameForm', {
    controller: NewGameFormController,
    templateUrl: '/tmpl/newgameform.html'
  });
})();
