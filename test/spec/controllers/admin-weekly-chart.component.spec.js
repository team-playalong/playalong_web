'use strict';

describe('admin-weekly-chart.component', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  let ctrl;
  let res;

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

  it('should add the difference of positions', function() {
    var curr = [{
      rank: 2,
      chordKey: 1,
    }];

    var last = {
      1: {
        rank: 3,
      },
    };
    res = ctrl.addPositionDifference(curr, last);
    expect(res[0].positionDifference).toBe(1);
  });
});
