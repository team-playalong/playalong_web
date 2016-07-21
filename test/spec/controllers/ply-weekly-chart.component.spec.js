(function() {
	'use strict';
	describe('ply-weekly-chart.component.spec', function() {
		var res;

		describe('weeklyChartCtrl', function () {

		  // load the controller's module
		  beforeEach(module('playalongWebApp'));

		  var ctrl;
		  // Initialize the controller and a mock scope
		  beforeEach(inject(function ($controller) {
		    ctrl = $controller('weeklyChartCtrl', {
		      // place here mocked dependencies
		    });

		  }));

		  it('should be initialized', function() {
		  	expect(ctrl).toBeDefined();
		  });

		  it('should build subheader message', function() {
		  	res = ctrl.buildSubheaderMessage({dateCreated: 'Today'});
	  		expect(res).toContain('Today');
		  });


		  it('should format raw weekly chart data before presenting it', function() {
		  	var mock = {
		  		songs: {
		  			1: {

		  			},
		  			2: {

		  			},
		  		}
		  	};
		  	res = ctrl.formatData(mock);
		  	expect(res.songs.length).toBe(2);
		  });
		});


	})

})();
