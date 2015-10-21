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
        },
        getUser: function(platform) {
          if (platform === 'google')
          {
            return mockData.getMockGoogleUser();
          }
          else {
            return mockData.getMockFacebookUser();
          }
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

  var defaultAvatar = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3ePATIeshhJP8o7lbQLaLLEt-VfMxnmoqURNdAKLu9rmy6z9M';
  it('should set an avatar image depending on the users social network', function() {
    //FACEBOOK
    var res;
    res = scope.setAvatarImage(); 
    expect(res).toBe('myImagePath.png');

    //GOOGLE
    spyOn(scope.login,'getUser').and.callFake(function() {
      return mockData.getMockGoogleUser();
    });
    res = scope.setAvatarImage(); 
    expect(res).toBe('myGoogleImagePath.png');
  });


  it('should set an empty avatar imageif the user isnt logged in', function() {
    //Logged out
    spyOn(scope.login,'isLoggedIn').and.callFake(function() {
      return false;
    });
    var res = scope.setAvatarImage(); 

    expect(res).toBe(defaultAvatar);
  });
});
