'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  let scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('MainCtrl', {
      $scope: scope,
    });
  }));

  it('should initialize all components', function() {
    expect(scope).toBeDefined();
    expect(scope.paths).toBeDefined();
  });

  it('should open the sidenav', function() {
    scope.buildToggler();
  });

});
