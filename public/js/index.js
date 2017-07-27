'use strict';

/* eslint-env angular, browser */

(() => {
  angular.module('ashcan', ['ui.router']).config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$locationProvider'];

  function routeConfig($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state({name: 'home', url: '/', component: 'home'});
    // .state({name: 'user', url: '/user/:id', component: 'user'});
  }
  /////
  angular.module('ashcan').component('home', {
    controller: HomeController,
    templateUrl: '/tmpl/home.html'
  });

  function HomeController() {
    const vm = this;

    vm.$onInit = function init() {
      vm.header = 'HOME';
    };
  }

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

  angular.module('ashcan').component('ashHeader', {
    controller: HeaderController,
    templateUrl: '/tmpl/header.html'
  });

  HeaderController.$inject = ['$window'];

  function HeaderController($window) {
    const vm = this;

    $window.initGapi = function() {
      console.log('initGapi()');
      //  gapi.load('auth2', initSigninV2);
    };

    vm.$onInit = function onInit() {
    };
  }

})();

/*

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log('User signed out.');
  });
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id_token = googleUser.getAuthResponse().id_token;

  // console.log('ID: ' + profile.getId());
  // console.log('Name: ' + profile.getName());
  // console.log('Image URL: ' + profile.getImageUrl());
  // console.log('Email: ' + profile.getEmail());
  // This is null if the 'email' scope is not present.

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/tokensignin');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    console.log('Signed in as: ' + xhr.responseText);
  };
  xhr.send('idtoken=' + id_token);
}

00000

    var initSigninV2 = function() {
        console.log('initSigninV2()');
        auth2 = gapi.auth2.getAuthInstance();
        auth2.isSignedIn.listen(signinChanged);
        auth2.currentUser.listen(userChanged);

        if(auth2.isSignedIn.get() == true) {
            auth2.signIn();
        }
    };

    var signinChanged = function(isSignedIn) {
        console.log('signinChanged() = ' + isSignedIn);
        if(isSignedIn) {
            console.log('the user must be signed in to print this');
            var googleUser = auth2.currentUser.get();
            var authResponse = googleUser.getAuthResponse();
            var profile = googleUser.getBasicProfile();
            $scope.user.id          = profile.getId();
            $scope.user.fullName    = profile.getName();
            $scope.user.firstName   = profile.getGivenName();
            $scope.user.lastName    = profile.getFamilyName();
            $scope.user.photo       = profile.getImageUrl();
            $scope.user.email       = profile.getEmail();
            $scope.user.domain      = googleUser.getHostedDomain();
            $scope.user.timestamp   = moment().format('x');
            $scope.user.idToken     = authResponse.id_token;
            $scope.user.expiresAt   = authResponse.expires_at;
            $scope.$digest();
        } else {
            console.log('the user must not be signed in if this is printing');
            $scope.user = {};
            $scope.$digest();
        }
    };

    var userChanged = function(user) {
        console.log('userChanged()');
    };

    $scope.signOut = function() {
        console.log('signOut()');
        auth2.signOut().then(function() {
            signinChanged(false);
        });
        console.log(auth2);
    };

    $scope.disconnect = function() {
        console.log('disconnect()');
        auth2.disconnect().then(function() {
            signinChanged(false);
        });
        console.log(auth2);
    };
    */
