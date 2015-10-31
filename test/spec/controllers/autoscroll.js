'use strict';

describe('Controller: AutoscrollCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var AutoscrollCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutoscrollCtrl = $controller('AutoscrollCtrl', {
      $scope: scope
    });
  }));

  it('should initialize all components', function() {
    expect(scope).toBeDefined();
    expect(scope.config).toBeDefined();
    expect(scope.speed).toBeDefined();    
    expect(scope.speed).toBe(1);

  });

  it('should update interval parameters', function () {
    spyOn(scope,'normalizeSpeed');
    scope.updateInterval();
    expect(scope.normalizeSpeed).toHaveBeenCalled();
  });

  it('should normalize scroll speed by top and bottom values', function() {
    var res = scope.normalizeSpeed();
    expect(res).toBe(1);

    scope.speed = 5;
    res = scope.normalizeSpeed();
    expect(res).toBe(2);

    scope.speed = 3;
    res = scope.normalizeSpeed();
    expect(res).toBe(1.5);
  });
});
