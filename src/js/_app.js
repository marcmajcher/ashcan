(() => {
  'use strict';

  /* eslint-env angular, browser */

  function routeConfig($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state({
      name: 'home',
      url: '/',
      component: 'home'
    });
    // .state({name: 'user', url: '/user/:id', component: 'user'});
  }

  routeConfig.$inject = ['$stateProvider', '$locationProvider'];

  angular.module('ashcan', ['ui.router']).config(routeConfig);
})();
