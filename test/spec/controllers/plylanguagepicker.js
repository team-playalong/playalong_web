'use strict';

describe('Controller: PlylanguagepickerCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var PlylanguagepickerCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlylanguagepickerCtrl = $controller('PlylanguagepickerCtrl', {
      $scope: scope
    });
  }));
  it('should initialize all components', function() {
    //expect(scope.languages).toBeDefined(); 
  });

  it('should open the language modal', function() {
    scope.showLanguageModal();      
  });

  it('should get the right flag class', function() {
    var res = scope.getFlagClass();
    expect(res).toBe('us');
  });
});
