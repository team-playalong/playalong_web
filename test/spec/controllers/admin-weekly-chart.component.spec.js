'use strict';

describe('admin-weekly-chart.component', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var ctrl;
  var res;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    ctrl = $controller('adminWeeklyChartCtrl', {
    });
    ctrl.weeklyChart = mockData.getMockWeeklyChart();
  }));

  it('should initialize the ctrl', function () {
    expect(ctrl).toBeDefined();
  });

  it('should filterRanks', function() {
    ctrl.availableRanks = ['1'];
    res = ctrl.filterRanks(ctrl.availableRanks);
    expect(res.length).toBe(0);
  });


});
