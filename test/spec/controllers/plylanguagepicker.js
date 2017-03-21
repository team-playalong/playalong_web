'use strict';

describe('Controller: PlylanguagepickerCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  let PlylanguagepickerCtrl;
  let scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlylanguagepickerCtrl = $controller('PlylanguagepickerCtrl', {
      $scope: scope,
    });
  }));

  it('should open the language modal', function() {
    PlylanguagepickerCtrl.showLanguageModal();
  });

  it('should get the right flag class', function() {
    var res = PlylanguagepickerCtrl.getFlagClass();
    expect(res).toBe('us');
  });
});
