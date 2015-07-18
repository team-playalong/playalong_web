'use strict';

describe('Controller: BuilderctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var BuilderctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuilderctrlCtrl = $controller('BuilderctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
