(() => {
  'use strict';

  /* eslint-env node */

  function gapiService(/* $http */) {
    this.init = function init(gapi) {
      this.gapi = gapi;
      this.gapi.load('auth2', this.signIn.bind(this));
    };

    this.signIn = function signIn() {
      this.auth2 = this.gapi.auth2.getAuthInstance();
      this.auth2.isSignedIn.listen(this.signinChanged.bind(this));
      this.auth2.currentUser.listen(this.userChanged.bind(this));

      if (this.auth2.isSignedIn.get()) {
        this.auth2.signIn();
      }
    };

    this.signinChanged = function signinChanged(isSignedIn) {
      if (isSignedIn) {
        const googleUser = this.auth2.currentUser.get();
        // const authResponse = googleUser.getAuthResponse();
        const profile = googleUser.getBasicProfile();
        console.log(profile); // eslint-disable-line
        const idToken = googleUser.getAuthResponse().id_token;

        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // null if not scoped

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/tokensignin');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = () => {
          console.log('Signed in as: ' + xhr.responseText);
        };
        xhr.send('idtoken=' + idToken);
      }
      else {
        // console.log('the user must not be signed in if this is printing');
        // $scope.user = {};
        // $scope.$digest();
      }
    };

    this.userChanged = function userChanged(/* user */) {
      // console.log('userChanged()');
    };

    this.signOut = function signOut() {
      this.auth2.signOut().then(() => {
        this.signinChanged(false);
      });
    };

    this.disconnect = function disconnect() {
      this.auth2.disconnect().then(() => {
        this.signinChanged(false);
      });
    };
  }

  gapiService.$inject = ['$http'];

  angular.module('ashcan').service('GapiService', gapiService);
})();
