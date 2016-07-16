(function() {
	'use strict';
	describe('ply-weekly-chart.component.spec', function() {
		describe('weeklyChartCtrl', function () {

		  // load the controller's module
		  beforeEach(module('playalongWebApp'));

		  var ctrl;
		  var res
		  // Initialize the controller and a mock scope
		  beforeEach(inject(function ($controller) {
		    ctrl = $controller('weeklyChartCtrl', {
		      // place here mocked dependencies
		    });

		  }));

		  it('should be initialized', function() {
		  	expect(ctrl).toBeDefined();
		  });
		});
	
	})
		
})();
