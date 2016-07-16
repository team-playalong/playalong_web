(function () {
    'use strict';
    weeklyChartCtrl.$inject = ['WeeklyChart', '$rootScope'];
    function weeklyChartCtrl(WeeklyChart, $rootScope) {
        var $ctrl = this;
        $ctrl.buildSubheaderMessage = function (weeklyChartData) {
            return "\n\t\t\t\t{{'weeklyChart.YEAR' | translate}}:\n\t\t\t\t<b>" + weeklyChartData.year + "</b>\n\t\t\t\t<br />\n\t\t\t\t{{'weeklyChart.WEEK_NUMBER' | translate}}:\n\t\t\t\t<b>" + weeklyChartData.weekNumber + "</b>\n\t\t\t";
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
                .then(function (result) { return $ctrl.weeklyChartData = $ctrl.formatData(result); })
                .finally($rootScope.stopSpin());
        };
    }
    angular.module('playalongWebApp')
        .controller('weeklyChartCtrl', weeklyChartCtrl)
        .component('plyWeeklyChart', {
        template: "\n\t\t\t\t<div  class=\"md-padding weekly-chart\"\n\t\t\t\t      translate-namespace=\"weeklyChart\">\n\t\t\t\t    <md-card layout-align=\"center\" ng-if=\"$ctrl.weeklyChartData\" class=\"ply-search-results\">\n\t\t\t\t      <md-card-content>\n\t\t\t\t      \t<h2 translate=\".TITLE\"></h2>\n\t\t\t\t        <h4>\n\t\t\t\t          <span compile=\"::$ctrl.buildSubheaderMessage($ctrl.weeklyChartData)\"></span>\n\t\t\t\t        </h4>\n\n\t\t\t\t        <md-list ng-repeat=\"song in $ctrl.weeklyChartData.songs | orderBy:'rank'\">\n\t\t\t\t\t\t\t\t\t<div layout=\"row\" layout-wrap>\n\t\t\t\t\t\t\t\t\t  <span flex-sm=\"25\" flex-gt-sm=\"10\">\n\t\t\t\t\t\t\t\t\t  \t\n\t\t\t\t\t\t\t\t\t  \t<h4 class=\"weekly-chart-song-rank\" layout-align=\"center center\" ng-bind=\"song.rank\"></h4>\n\t\t\t\t\t\t\t\t\t  </span>\n\t\t\t\t\t\t\t\t\t  <chord-result\n\t\t\t\t\t\t\t\t\t  \tflex-gt-sm=\"60\"\n\t\t\t\t\t\t\t\t\t    chord=\"song\">\n\t\t\t\t\t\t\t\t\t  </chord-result>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t          \n\t\t\t\t        </md-list>\n\t\t\t\t      </md-card-content>\n\t\t\t\t    </md-card>\n\t\t\t\t  </section>\n\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\n\t\t\t",
        controller: 'weeklyChartCtrl',
    });
})();
//# sourceMappingURL=ply-weekly-chart.component.js.map