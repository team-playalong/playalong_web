(function() {
	'use strict';

	weeklyChartCtrl.$inject = ['WeeklyChart', '$rootScope'];
	function weeklyChartCtrl(WeeklyChart, $rootScope) {
		const $ctrl = this;


		$ctrl.buildSubheaderMessage = weeklyChartData => {
			return `
				{{'weeklyChart.YEAR' | translate}}:
				<b>${weeklyChartData.year}</b>
				{{'weeklyChart.WEEK_NUMBER' | translate}}:
				<b>${weeklyChartData.weekNumber}</b>
			`;
			 
		};

		$ctrl.$onInit = () => {
			$rootScope.startSpin();
			$rootScope.currPage = 'weeklyChart.PAGE_TITLE';
			WeeklyChart.getLatestChart()
			.then(result => $ctrl.weeklyChartData = result)
			.finally($rootScope.stopSpin());
		};
	}

	angular.module('playalongWebApp')
		.controller('weeklyChartCtrl', weeklyChartCtrl)
		.component('plyWeeklyChart', {
			template: `
				<div  class="md-padding" id="home"
				      translate-namespace="weeklyChart">
				    <md-card layout-align="center" ng-if="$ctrl.weeklyChartData" class="ply-search-results">
				      <md-card-content>
				        <h1
				          class="md-title"
				          layout-align="left"
				          translate=".TITLE">
				        </h1>
				        <h5>
				          <span compile="::$ctrl.buildSubheaderMessage($ctrl.weeklyChartData)"></span>
				        </h5>

				        <md-list ng-repeat="result in home.searchResults track by $index">
				          <chord-result
				            chord="result">
				          </chord-result>
				        </md-list>
				      </md-card-content>
				    </md-card>
				  </section>
				</div>

				<pre>
					{{$ctrl.weeklyChartData | json}}
				</pre>
				
			`,
			controller: 'weeklyChartCtrl',
		});

})();
