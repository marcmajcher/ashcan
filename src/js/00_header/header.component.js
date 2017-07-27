'use strict';

/* eslint-env angular, browser */
/* globals gapi */

(() => {
  function HeaderController(GapiService, $window) {
    const vm = this;

    $window.initGapi = () => {
      GapiService.init(gapi);
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
