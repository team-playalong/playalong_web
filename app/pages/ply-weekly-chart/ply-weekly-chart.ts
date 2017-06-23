weeklyChartCtrl.$inject = ['WeeklyChart', '$rootScope', 'Spinner'];
function weeklyChartCtrl(WeeklyChart, $rootScope, Spinner) {
	const $ctrl = this;

	$ctrl.buildSubheaderMessage = weeklyChartData => {
		return `
      {{'weeklyChart.CREATED' | translate}}:
			<b>{{ ${weeklyChartData.dateCreated} | date}}</b>
		`;

	};

	$ctrl.formatData = rawData => {
		const songsArr = [];

		for (const songKey in rawData.songs) {
			songsArr.push(rawData.songs[songKey]);
		}

		rawData.songs = songsArr;

		return rawData;
	};

	$ctrl.$onInit = () => {
		Spinner.start();
		$rootScope.currPage = 'weeklyChart.PAGE_TITLE';
		WeeklyChart.getLatestChart()
		.then(result => {
			$ctrl.weeklyChartData = $ctrl.formatData(result);
			Spinner.stop();
		})
		.catch(Spinner.stop);
	};
}

const plyWeeklyChart = {
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
								<span flex="5" layout-padding class="weekly-chart-position-difference">
									<ng-md-icon class="ply-fab-icon" ng-if="song.positionDifference === null || song.positionDifference === undefined" size="30" style="fill: #FFC107;"  icon="wb_sunny"></ng-md-icon>
									<span
										ng-if="song.positionDifference !== null && song.positionDifference !== undefined"
										data-tip="{{song.positionDifference}}"
									>
										<!-- TODO - Remove it. Loading this for tooltip support -->
										<ply-icon></ply-icon>
										<ng-md-icon class="ply-fab-icon" ng-if="song.positionDifference < 0" style="fill: #F44336;" size="30" icon="arrow_downward"></ng-md-icon>
										<ng-md-icon class="ply-fab-icon" ng-if="song.positionDifference > 0" style="fill: #8BC34A;" size="30" icon="arrow_upwards"></ng-md-icon>
										<ng-md-icon class="ply-fab-icon" ng-if="song.positionDifference === 0"  icon="arrow_forward" style="fill: #FF9800;" size="30"></ng-md-icon>
									</span>
								</span>
								<span flex-sm="30" flex-gt-sm="10" layout-align="end center">

									<h4 class="weekly-chart-song-rank" ng-bind="song.rank"></h4>
								</span>
								<chord-result
									flex
									chord="song">
								</chord-result>

							</div>
							<md-divider></md-divider>
						</md-list>
					</md-card-content>
				</md-card>
			</section>
		</div>


	`,
	controller: 'weeklyChartCtrl',
};

export { weeklyChartCtrl, plyWeeklyChart };
