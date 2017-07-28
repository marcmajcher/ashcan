'use strict';

/* eslint-env node */

(() => {
  function AccountController(GapiService) {
    const vm = this;

    vm.$onInit = function init() {
      vm.profile = GapiService.profile;
    };
  }

  angular.module('ashcan').component('account', {
    controller: AccountController,
    templateUrl: '/tmpl/account.html'
  });
})();
