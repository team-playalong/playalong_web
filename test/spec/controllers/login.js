'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  let $rootScope;
  let scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$rootScope_, $q, _$httpBackend_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();

    $controller('LoginCtrl', {
      $scope: scope,
      login: {
        loginSocial: function() {
          return $q.when({});
        },
        isLoggedIn: function() {
          return true;
        },
        getAuth: function(platform) {
          if (platform === 'google')
          {
            return mockData.getMockGoogleUser();
          }
          else {
            return mockData.getMockFacebookUser();
          }
        },
      },
    });
    //Ignores all html requests
    _$httpBackend_.whenGET(/views\/.*/).respond();
    _$httpBackend_.whenGET(/i18n/).respond();

    scope.$apply();
  }));
});
