(function() {
	'use strict';

	function weeklyChartCtrl() {
		const $ctrl = this;

		
	}

	angular.module('playalongWebApp')
		.controller('weeklyChartCtrl', weeklyChartCtrl)
		.component('plyWeeklyChart', {
			template: `
				weekly chart!
			`,
			controller: 'weeklyChartCtrl',
		});

})();
