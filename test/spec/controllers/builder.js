'use strict';

describe('Controller: BuilderctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var BuilderctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuilderctrlCtrl = $controller('BuilderCtrl', {
      $scope: scope
    });
  }));

  it('should initialize the scope', function () {
    expect(scope).toBeDefined(); 
  });
});
