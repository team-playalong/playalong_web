(function () {
    'use strict';
    var adminWeeklyChart = {
        template: "\n      <div  class=\"md-padding\" id=\"adminWeeklyChart\"\n          translate-namespace=\"admin.weeklyChart\">\n        <admin-weekly-search-area\n          rank-change-handler=\"$ctrl.rankChangeHandler\"\n          available-ranks=\"$ctrl.availableRanks\"\n          weekly-chart=\"$ctrl.weeklyChart\"></admin-weekly-search-area>\n        <admin-weekly-chord-results\n          songs=\"$ctrl.weeklyChart.songs\"\n          available-ranks=\"$ctrl.availableRanks\"\n          rank-change-handler=\"$ctrl.updateRank\">\n        </admin-weekly-chord-results>\n      </div>\n    ",
        controller: function adminWeeklyChartCtrl() {
            var _this = this;
            this.weeklyChart = {
                year: 2016,
                weekNumber: 20,
                songs: [],
            };
            this.availableRanks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            this.updateRank = function (_a) {
                var chordKey = _a.chordKey, rank = _a.rank;
                for (var _i = 0, _b = _this.weeklyChart.songs; _i < _b.length; _i++) {
                    var currSong = _b[_i];
                    if (currSong.chordKey === chordKey) {
                        currSong.rank = rank;
                    }
                }
            };
            this.rankChangeHandler = function (_a) {
                var rank = _a.rank, artist = _a.artist, title = _a.title, chordKey = _a.chordKey;
                _this.weeklyChart.songs.push({
                    artist: artist,
                    title: title,
                    rank: rank,
                    chordKey: chordKey,
                });
            };
        },
    };
    var adminWeeklySearchArea = {
        templateUrl: 'components/admin/admin-weekly-search-area.html',
        bindings: {
            weeklyChart: '=',
            rankChangeHandler: '<',
            availableRanks: '<',
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
        this.searchChords = function () {
            _this.searchResults = [];
            chords.searchChordsBy(_this.searchConfig.searchBy, _this.searchConfig.searchInput)
                .then(function (data) { return _this.searchResults = data; })
                .catch(function (error) { return console.error(error); });
        };
        this.handleRankChanged = function (song) {
            _this.searchResults = null;
            _this.rankChangeHandler(song);
        };
    }
    var adminWeeklyChordResults = {
        template: "\n      <md-list ng-repeat=\"result in $ctrl.songs | orderBy: 'rank'\">\n        <chord-result\n          available-ranks=\"$ctrl.availableRanks\"\n          rank-change-handler=\"$ctrl.rankChangeHandler\"\n          chord=\"result\">\n        </chord-result>\n      </md-list>\n      <md-button flex class=\"md-raised md-accent\" type=\"submit\" ng-click=\"$ctrl.searchChords()\"\n        aria-label=\"Go\"\n        translate=\".SEARCH_BOTTON\">\n      </md-button>\n    ",
        bindings: {
            availableRanks: '<',
            songs: '<',
            rankChangeHandler: '<',
        },
    };
    angular.module('playalongWebApp')
        .component('adminWeeklyChart', adminWeeklyChart)
        .component('adminWeeklySearchArea', adminWeeklySearchArea)
        .component('adminWeeklyChordResults', adminWeeklyChordResults);
})();
//# sourceMappingURL=admin-weekly-chart.component.js.map