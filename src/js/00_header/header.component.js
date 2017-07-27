'use strict';

/* eslint-env angular, browser */
/* globals gapi */

(() => {
  function HeaderController(GapiService, $window) {
    const vm = this;

    $window.initGapi = () => {
      GapiService.init(gapi);
    };

    vm.$onInit = function onInit() {
      vm.profile = GapiService.profile;
      vm.signedIn = GapiService.signedIn;
    };

    vm.signOut = function signOut() {
      GapiService.signOut();
    };
  }
  HeaderController.$inject = ['GapiService', '$window'];

  angular.module('ashcan').component('ashHeader', {
    controller: HeaderController,
    templateUrl: '/tmpl/header.html'
  });
})();
