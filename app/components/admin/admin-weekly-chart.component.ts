(function() {
	'use strict';
		
	function adminWeeklyChartCtrl() {

	}

	angular.module('playalongWebApp')
		.component('adminWeeklyChart', {
			template: `
				TODO
				<admin-weekly-search-area></admin-weekly-search-area>
				<admin-weekly-chord-results></admin-weekly-chord-results>
				

			`,
			controller: 'adminWeeklyChartCtrl',
		})
		.controller('adminWeeklyChartCtrl', adminWeeklyChartCtrl);

})();