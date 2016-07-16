(function () {
    'use strict';
    weeklyChartCtrl.$inject = ['WeeklyChart', '$rootScope'];
    function weeklyChartCtrl(WeeklyChart, $rootScope) {
        var $ctrl = this;
        $ctrl.buildSubheaderMessage = function (weeklyChartData) {
            return "\n\t\t\t\t{{'weeklyChart.YEAR' | translate}}:\n\t\t\t\t<b>" + weeklyChartData.year + "</b>\n\t\t\t\t{{'weeklyChart.WEEK_NUMBER' | translate}}:\n\t\t\t\t<b>" + weeklyChartData.weekNumber + "</b>\n\t\t\t";
        };
        $ctrl.$onInit = function () {
            $rootScope.startSpin();
            $rootScope.currPage = 'weeklyChart.PAGE_TITLE';
            WeeklyChart.getLatestChart()
                .then(function (result) { return $ctrl.weeklyChartData = result; })
                .finally($rootScope.stopSpin());
        };
    }
    angular.module('playalongWebApp')
        .controller('weeklyChartCtrl', weeklyChartCtrl)
        .component('plyWeeklyChart', {
        template: "\n\t\t\t\t<div  class=\"md-padding\" id=\"home\"\n\t\t\t\t      translate-namespace=\"weeklyChart\">\n\t\t\t\t    <md-card layout-align=\"center\" ng-if=\"$ctrl.weeklyChartData\" class=\"ply-search-results\">\n\t\t\t\t      <md-card-content>\n\t\t\t\t        <h1\n\t\t\t\t          class=\"md-title\"\n\t\t\t\t          layout-align=\"left\"\n\t\t\t\t          translate=\".TITLE\">\n\t\t\t\t        </h1>\n\t\t\t\t        <h5>\n\t\t\t\t          <span compile=\"::$ctrl.buildSubheaderMessage($ctrl.weeklyChartData)\"></span>\n\t\t\t\t        </h5>\n\n\t\t\t\t        <md-list ng-repeat=\"result in home.searchResults track by $index\">\n\t\t\t\t          <chord-result\n\t\t\t\t            chord=\"result\">\n\t\t\t\t          </chord-result>\n\t\t\t\t        </md-list>\n\t\t\t\t      </md-card-content>\n\t\t\t\t    </md-card>\n\t\t\t\t  </section>\n\t\t\t\t</div>\n\n\t\t\t\t<pre>\n\t\t\t\t\t{{$ctrl.weeklyChartData | json}}\n\t\t\t\t</pre>\n\t\t\t\t\n\t\t\t",
        controller: 'weeklyChartCtrl',
    });
})();
//# sourceMappingURL=ply-weekly-chart.component.js.map