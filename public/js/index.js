'use strict';

/* eslint-env angular, browser */

(() => {
  angular.module('ashcan', ['ui.router'])
    .config(demoConfig);

  demoConfig.$inject = ['$stateProvider', '$locationProvider'];

  function demoConfig($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home'
      })
      .state({
        name: 'user',
        url: '/user/:id',
        component: 'user'
      });
  }



angular.module('ashcan')
  .component('home', {
    controller: HomeController,
    templateUrl: '/tmpl/home.html'
  });

function HomeController() {
  const vm = this;

  vm.$onInit = function init() {
    vm.header = 'HOME';
  };
}



angular.module('ashcan')
  .component('user', {
    controller: UserController,
    templateUrl: '/tmpl/user.html'
  });

UserController.$inject = ['$stateParams'];

function UserController($stateParams) {
  const vm = this;

  vm.$onInit = function init() {
    vm.header = `USER ${$stateParams.id}`;
  };
}


})();
