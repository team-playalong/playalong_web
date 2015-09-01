'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var MainCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller,$rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope  
    });
  }));

  it('should initialize all components', function() {
    expect(scope).toBeDefined();
    expect(scope.paths).toBeDefined();
  });

  it('should support adding alerts', function() {
    expect(scope.allAlerts).toBeDefined();
    expect(scope.allAlerts.length).toBe(0);
    scope.addAlert('danger','test');
    expect(scope.allAlerts.length).toBe(1);
    expect(scope.allAlerts[0].msg).toBe('test');
  });


  it('should support removing alerts', function() {
    scope.addAlert('danger','test');
    scope.addAlert('success','test2');
    expect(scope.allAlerts.length).toBe(2);

    scope.closeAlert(0);
    expect(scope.allAlerts.length).toBe(1);
    expect(scope.allAlerts[0].msg).toBe('test2');
  });


});
