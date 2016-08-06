(function () {
    'use strict';
    weeklyChartCtrl.$inject = ['WeeklyChart', '$rootScope'];
    function weeklyChartCtrl(WeeklyChart, $rootScope) {
        var $ctrl = this;
        $ctrl.buildSubheaderMessage = function (weeklyChartData) {
            return "\n        {{'weeklyChart.CREATED' | translate}}:\n\t\t\t\t<b>{{ " + weeklyChartData.dateCreated + " | date}}</b>\n\t\t\t";
        };
        $ctrl.formatData = function (rawData) {
            var songsArr = [];
            for (var songKey in rawData.songs) {
                songsArr.push(rawData.songs[songKey]);
            }
            rawData.songs = songsArr;
            return rawData;
        };
        $ctrl.$onInit = function () {
            $rootScope.startSpin();
            $rootScope.currPage = 'weeklyChart.PAGE_TITLE';
            WeeklyChart.getLatestChart()
                .then(function (result) {
                $ctrl.weeklyChartData = $ctrl.formatData(result);
                $rootScope.stopSpin();
            })
                .catch(function (error) { return $rootScope.stopSpin(); });
        };
    }
    angular.module('playalongWebApp')
        .controller('weeklyChartCtrl', weeklyChartCtrl)
        .component('plyWeeklyChart', {
        template: "\n\t\t\t\t<div  class=\"md-padding weekly-chart\"\n\t\t\t\t      translate-namespace=\"weeklyChart\">\n\t\t\t\t    <md-card layout-align=\"center\" ng-if=\"$ctrl.weeklyChartData\" class=\"ply-search-results\">\n\t\t\t\t      <md-card-content>\n\t\t\t\t      \t<h2 translate=\".TITLE\"></h2>\n\t\t\t\t        <h4>\n\t\t\t\t          <span compile=\"::$ctrl.buildSubheaderMessage($ctrl.weeklyChartData)\"></span>\n\t\t\t\t        </h4>\n\n\t\t\t\t        <md-list ng-repeat=\"song in $ctrl.weeklyChartData.songs | orderBy:'rank'\">\n\t\t\t\t\t\t\t\t\t<div layout=\"row\" layout-wrap layout-align=\"start center\">\n                    <span flex=\"5\" layout-padding class=\"weekly-chart-position-difference\">\n\n                      <ng-md-icon class=\"ply-fab-icon\" ng-if=\"song.positionDifference === null || song.positionDifference === undefined\" size=\"30\" style=\"fill: #FFC107;\"  icon=\"wb_sunny\"></ng-md-icon>\n                      <span ng-if=\"song.positionDifference !== null && song.positionDifference !== undefined\">\n                        <md-tooltip md-direction=\"top\">\n                          {{song.positionDifference}}\n                        </md-tooltip>\n                        <ng-md-icon class=\"ply-fab-icon\" ng-if=\"song.positionDifference < 0\" style=\"fill: #F44336;\" size=\"30\" icon=\"arrow_downward\"></ng-md-icon>\n                        <ng-md-icon class=\"ply-fab-icon\" ng-if=\"song.positionDifference > 0\" style=\"fill: #8BC34A;\" size=\"30\" icon=\"arrow_upwards\"></ng-md-icon>\n                        <ng-md-icon class=\"ply-fab-icon\" ng-if=\"song.positionDifference === 0\"  icon=\"arrow_forward\" style=\"fill: #FF9800;\" size=\"30\"></ng-md-icon>\n                      </span>\n                    </span>\n\t\t\t\t\t\t\t\t\t  <span flex-sm=\"30\" flex-gt-sm=\"10\" layout-align=\"end center\">\n\n\t\t\t\t\t\t\t\t\t  \t<h4 class=\"weekly-chart-song-rank\" ng-bind=\"song.rank\"></h4>\n\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t  <chord-result\n\t\t\t\t\t\t\t\t\t  \tflex\n\t\t\t\t\t\t\t\t\t    chord=\"song\">\n\t\t\t\t\t\t\t\t\t  </chord-result>\n\n\t\t\t\t\t\t\t\t\t</div>\n                  <md-divider></md-divider>\n\t\t\t\t        </md-list>\n\t\t\t\t      </md-card-content>\n\t\t\t\t    </md-card>\n\t\t\t\t  </section>\n\t\t\t\t</div>\n\n\n\t\t\t",
        controller: 'weeklyChartCtrl',
    });
})();
//# sourceMappingURL=ply-weekly-chart.component.js.map