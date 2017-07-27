'use strict';

/* eslint-env angular, browser */

(() => {
  function HomeController() {
    const vm = this;

    vm.$onInit = function init() {
      vm.header = 'HOME';
    };
  }

  angular.module('ashcan').component('home', {
    controller: HomeController,
    templateUrl: '/tmpl/home.html'
  });
})();
