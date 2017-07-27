'use strict';

/* eslint-env node */

(() => {
  function UserController($stateParams) {
    const vm = this;

    vm.$onInit = function init() {
      vm.user = `USER ${$stateParams.id}`;
    };
  }
  // UserController.$inject = ['$stateParams'];

  angular.module('ashcan').component('user', {
    controller: UserController,
    templateUrl: '/tmpl/account.html'
  });
})();
