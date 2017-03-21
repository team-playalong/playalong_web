'use strict';

describe('Controller: AutoscrollCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  let AutoscrollCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    AutoscrollCtrl = $controller('AutoscrollCtrl', {
    });
  }));

  it('should initialize all components', function() {
    expect(AutoscrollCtrl).toBeDefined();
    expect(AutoscrollCtrl.config).toBeDefined();
    expect(AutoscrollCtrl.speed).toBeDefined();
    expect(AutoscrollCtrl.speed).toBe(0);

  });

  it('should update interval parameters', function () {
    spyOn(AutoscrollCtrl, 'normalizeSpeed');
    AutoscrollCtrl.updateInterval();
    expect(AutoscrollCtrl.normalizeSpeed).toHaveBeenCalled();
  });

  it('should normalize scroll speed by top and bottom values', function() {
    var res = AutoscrollCtrl.normalizeSpeed();
    expect(res).toBe(0.8);

    AutoscrollCtrl.speed = 5;
    res = AutoscrollCtrl.normalizeSpeed();
    expect(res).toBe(1.8);

    AutoscrollCtrl.speed = 3;
    res = AutoscrollCtrl.normalizeSpeed();
    expect(res).toBe(1.4);
  });
});
