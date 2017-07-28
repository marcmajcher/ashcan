'use strict';

(function () {
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
'use strict';

/* eslint-env angular, browser */
/* globals gapi */

(function () {
  function HeaderController(GapiService, $window) {
    var vm = this;

    $window.initGapi = function () {
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
'use strict';

/* eslint-env angular, browser */

(function () {
  function HomeController() {
    var vm = this;

    vm.$onInit = function init() {
      vm.header = 'HOME';
    };
  }

  angular.module('ashcan').component('home', {
    controller: HomeController,
    templateUrl: '/tmpl/home.html'
  });
})();
'use strict';

/* eslint-env node */

(function () {
  function UserController($stateParams) {
    var vm = this;

    vm.$onInit = function init() {
      vm.user = 'USER ' + $stateParams.id;
    };
  }
  // UserController.$inject = ['$stateParams'];

  angular.module('ashcan').component('user', {
    controller: UserController,
    templateUrl: '/tmpl/account.html'
  });
})();
'use strict';

(function () {
  'use strict';

  /* eslint-env node */

  function gapiService($rootScope, $http) {
    this.profile = {
      signedIn: false
    };

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

    this.signinChanged = function signinChanged(signedIn) {
      var _this = this;

      if (signedIn) {
        var googleUser = this.auth2.currentUser.get();
        var profile = googleUser.getBasicProfile();

        this.profile.name = profile.getName();
        this.profile.firstName = profile.getGivenName();
        this.profile.lastName = profile.getFamilyName();
        this.profile.imageUrl = profile.getImageUrl();
        this.profile.email = profile.getEmail();

        $http.post('/gsignin', 'idtoken=' + googleUser.getAuthResponse().id_token, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function () {
          // (response)
          _this.profile.signedIn = true;
          console.log(_this.profile); // eslint-disable-line no-console
        }).catch(function (error) {
          console.error(error); // eslint-disable-line no-console
        });
      } else {
        this.profile.name = '';
        this.profile.firstName = '';
        this.profile.lastName = '';
        this.profile.imageUrl = '';
        this.profile.email = '';
        this.profile.signedIn = false;
        $rootScope.$digest();
      }
    };

    this.userChanged = function userChanged() {
      /* (user) */
      // console.log('userChanged()');
    };

    this.signOut = function signOut() {
      var _this2 = this;

      this.auth2.signOut().then(function () {
        _this2.signinChanged(false);
        $http.post('/signout').catch(function (error) {
          console.error(error); // eslint-disable-line no-console
        });
      });
    };

    this.disconnect = function disconnect() {
      var _this3 = this;

      this.auth2.disconnect().then(function () {
        _this3.signinChanged(false);
      });
    };
  }

  gapiService.$inject = ['$rootScope', '$http'];

  angular.module('ashcan').service('GapiService', gapiService);
})();