'use strict';

/* eslint-env angular, browser */
/* globals gapi */

(() => {
  function GsigninController(GapiService, $window, $state) {
    const vm = this;

    $window.initGapi = () => {
      GapiService.init(gapi);
    };

    vm.$onInit = function onInit() {
      vm.profile = GapiService.profile;
      GapiService.profile.onLogin = () => {
        console.log(vm.profile); // eslint-disable-line no-console
        $state.go('home');
      };
    };

    vm.signOut = function signOut() {
      $state.go('index');
      GapiService.signOut();
    };
  }
  GsigninController.$inject = ['GapiService', '$window', '$state'];

  angular.module('ashcan').component('gsignin', {
    controller: GsigninController,
    templateUrl: '/tmpl/gsignin.html'
  });
})();
