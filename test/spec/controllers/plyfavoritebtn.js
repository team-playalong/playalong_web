'use strict';

describe('Controller: PlyfavoritebtnCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var PlyfavoritebtnCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    PlyfavoritebtnCtrl = $controller('PlyfavoritebtnCtrl', {
      $scope: $rootScope.$new()
    });
  }));

  it('should initialize all components', function () {
    expect(PlyfavoritebtnCtrl).toBeDefined();
  });
});
