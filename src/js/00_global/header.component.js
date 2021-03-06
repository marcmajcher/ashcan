'use strict';

/* eslint-env angular, browser */

(() => {
  function HeaderController(GapiService) {
    const vm = this;

    vm.$onInit = function onInit() {
      vm.profile = GapiService.profile;
    };
  }
  HeaderController.$inject = ['GapiService'];

  angular.module('ashcan').component('ashHeader', {
    controller: HeaderController,
    templateUrl: '/tmpl/header.html'
  });
})();
