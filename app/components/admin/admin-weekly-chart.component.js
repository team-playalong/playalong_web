(function () {
    'use strict';
    var adminWeeklyChart = {
        template: "\n      <div  class=\"md-padding\" id=\"adminWeeklyChart\"\n          translate-namespace=\"admin.weeklyChart\">\n        <admin-weekly-search-area\n          weekly-chart=\"$ctrl.weeklyChart\"></admin-weekly-search-area>\n        <admin-weekly-chord-results></admin-weekly-chord-results>\n      </div>\n    ",
        controller: function adminWeeklyChartCtrl() {
            this.weeklyChart = {
                year: 2016,
                weekNumber: 20,
            };
        },
    };
    var adminWeeklySearchArea = {
        templateUrl: 'components/admin/admin-weekly-search-area.html',
        bindings: {
            weeklyChart: '=',
        },
        controller: adminWeeklySearchAreaCtrl,
    };
    adminWeeklySearchAreaCtrl.$inject = ['chords', 'PlyDate'];
    function adminWeeklySearchAreaCtrl(chords, PlyDate) {
        var _this = this;
        this.allYears = PlyDate.getAllYears();
        this.allWeekNumbers = PlyDate.getAllWeekNumbers();
        this.searchConfig = {
            searchBy: 'artist',
        };
        this.searchByOptions = [
            {
                label: 'Chord Id',
                value: 'chordId',
            },
            {
                label: 'Artist',
                value: 'artist',
            },
            {
                label: 'Title',
                value: 'title',
            },
        ];
        this.isShowRank = true;
        this.searchChords = function () {
            _this.searchResults = [];
            chords.searchChordsBy(_this.searchConfig.searchBy, _this.searchConfig.searchInput)
                .then(function (data) { return _this.searchResults = data; })
                .catch(function (error) { return console.error(error); });
        };
        this.availableRanks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    angular.module('playalongWebApp')
        .component('adminWeeklyChart', adminWeeklyChart)
        .component('adminWeeklySearchArea', adminWeeklySearchArea);
})();
//# sourceMappingURL=admin-weekly-chart.component.js.map