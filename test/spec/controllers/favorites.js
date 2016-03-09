'use strict';

describe('Controller: FavoritesCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var FavoritesCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$q, _$httpBackend_) {
    scope = $rootScope.$new();
    var mockUserSrv = {
      getFavorites: function() {
        return $q.when(mockData.getMockFavorites());
      }
    };
    $rootScope.startSpin = function() {};
    $rootScope.stopSpin = function() {};
    FavoritesCtrl = $controller('FavoritesCtrl', {
      $scope: scope,
      user: mockUserSrv,
      login: {
        getUser: function() {
          return mockData.getMockGoogleUser();
        },
        isLoggedIn: function() {
          return true;
        }
      }
    });

    _$httpBackend_.whenGET(/i18n/).respond();
    $rootScope.$apply();
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope).toBeDefined();
  });

  it('should get all users favorites', function(done) {
    FavoritesCtrl.init();

    setTimeout(function() {
      expect(FavoritesCtrl.favorites).toBeDefined();
      expect(Object.keys(FavoritesCtrl.favorites).length).toBe(2);
      done();
    },10);
  });
});
