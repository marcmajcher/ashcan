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

// angular.module('ashcan').component('user', {
//   controller: UserController,
//   templateUrl: '/tmpl/user.html'
// });
//
// UserController.$inject = ['$stateParams'];
//
// function UserController($stateParams) {
//   const vm = this;
//
//   vm.$onInit = function init() {
//     vm.header = `USER ${$stateParams.id}`;
//   };
// }
