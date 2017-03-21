'use strict';

describe('Controller: PlyfavoritebtnCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  let PlyfavoritebtnCtrl;
  let scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlyfavoritebtnCtrl = $controller('PlyfavoritebtnCtrl', {
      $scope: scope,
    });
  }));

  it('should initialize all components', function () {
    expect(PlyfavoritebtnCtrl).toBeDefined();
  });
});
