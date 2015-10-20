'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var LoginCtrl,
      $rootScope,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$rootScope_,$q,$httpBackend) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();

    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      login: {
        loginSocial: function() {
          return $q.when({});
        },
        isLoggedIn: function() {
          return true;
        }
      }
    });
    //Ignores all html requests
    $httpBackend.whenGET(/views\/.*/).respond();


    scope.$apply();
  }));

  it('should initialize all compoenents', function() {
    expect(scope).toBeDefined();
    expect(scope.loginSocial).toBeDefined();
  });

  it('should support login with social networks', function(done) {
    scope.loginSocial();
    scope.$apply();

    setTimeout(function() {
      
      done();
    },50);
  });
});
