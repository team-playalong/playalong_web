(function () {
    'use strict';
    function weeklyChartCtrl() {
        var $ctrl = this;
    }
    angular.module('playalongWebApp')
        .controller('weeklyChartCtrl', weeklyChartCtrl)
        .component('plyWeeklyChart', {
        template: "\n\t\t\t\tweekly chart!\n\t\t\t",
        controller: 'weeklyChartCtrl',
    });
})();
//# sourceMappingURL=ply-weekly-chart.component.js.map