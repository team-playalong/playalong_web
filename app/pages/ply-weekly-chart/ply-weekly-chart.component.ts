(function() {
	'use strict';

	weeklyChartCtrl.$inject = ['WeeklyChart', '$rootScope'];
	function weeklyChartCtrl(WeeklyChart, $rootScope) {
		const $ctrl = this;


		$ctrl.buildSubheaderMessage = weeklyChartData => {
			return `
        {{'weeklyChart.CREATED' | translate}}:
				<b>{{ ${weeklyChartData.dateCreated} | date}}</b>
			`;

		};

		$ctrl.formatData = rawData => {
			const songsArr = [];

			for (let songKey in rawData.songs) {
				songsArr.push(rawData.songs[songKey]);
			}

			rawData.songs = songsArr;

			return rawData;
		};

		$ctrl.$onInit = () => {
			$rootScope.startSpin();
			$rootScope.currPage = 'weeklyChart.PAGE_TITLE';
			WeeklyChart.getLatestChart()
			.then(result => {
				$ctrl.weeklyChartData = $ctrl.formatData(result);
				$rootScope.stopSpin();
			})
			.catch(error => $rootScope.stopSpin());
		};
	}
	angular.module('playalongWebApp')
		.controller('weeklyChartCtrl', weeklyChartCtrl)
		.component('plyWeeklyChart', {
			template: `
				<div  class="md-padding weekly-chart"
				      translate-namespace="weeklyChart">
				    <md-card layout-align="center" ng-if="$ctrl.weeklyChartData" class="ply-search-results">
				      <md-card-content>
				      	<h2 translate=".TITLE"></h2>
				        <h4>
				          <span compile="::$ctrl.buildSubheaderMessage($ctrl.weeklyChartData)"></span>
				        </h4>

				        <md-list ng-repeat="song in $ctrl.weeklyChartData.songs | orderBy:'rank'">
									<div layout="row" layout-wrap layout-align="start center">
									  <span flex-sm="30" flex-gt-sm="10" layout-align="end center">

									  	<h4 class="weekly-chart-song-rank" ng-bind="song.rank"></h4>
									  </span>
									  <chord-result
									  	flex
									    chord="song">
									  </chord-result>
									</div>

				        </md-list>
				      </md-card-content>
				    </md-card>
				  </section>
				</div>


			`,
			controller: 'weeklyChartCtrl',
		});

})();
