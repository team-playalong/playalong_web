'use strict';

describe('Controller: FavoritesCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var FavoritesCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$q) {
    scope = $rootScope.$new();
    var mockUserSrv = {
      getFavorites: function() {
        return $q.when(mockData.getMockFavorites());
      }
    };
    FavoritesCtrl = $controller('FavoritesCtrl', {
      $scope: scope,
      user: mockUserSrv
    });

    $rootScope.$apply();
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope).toBeDefined();
  });

  it('should get all users favorites', function(done) {
    scope.init();

    setTimeout(function() {
      expect(scope.favorites).toBeDefined();
      expect(scope.favorites.length).toBe(2);
      done();
    },10);
  });
});
