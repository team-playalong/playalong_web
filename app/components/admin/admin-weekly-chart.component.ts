(function() {
	'use strict';

  const adminWeeklyChart: ng.IComponentOptions = {
    template: `
      <div  class="md-padding" id="adminWeeklyChart"
          translate-namespace="admin.weeklyChart">
        <pre>{{$ctrl.lastWeekChart | json}}</pre>
        <admin-weekly-search-area
          rank-change-handler="$ctrl.rankChangeHandler"
          available-ranks="$ctrl.availableRanks"
          weekly-chart="$ctrl.weeklyChart"></admin-weekly-search-area>
        <admin-weekly-chord-results
          songs="$ctrl.weeklyChart.songs"
          available-ranks="$ctrl.availableRanks"
          save-chart="$ctrl.saveChart"
          rank-change-handler="$ctrl.updateRank">
        </admin-weekly-chord-results>
      </div>
    `,
    controller: 'adminWeeklyChartCtrl',
  };

  const adminWeeklySearchArea = {
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
    this.searchChords = () => {
      this.searchResults = [];
      chords.searchChordsBy(this.searchConfig.searchBy, this.searchConfig.searchInput)
        .then(data => this.searchResults = data)
        .catch(error => console.error(error));
    };

    this.handleRankChanged = song => {
      this.searchResults = null;
      this.rankChangeHandler(song);
    };
  }

  const adminWeeklyChordResults: ng.IComponentOptions = {
    template: `
      <md-list ng-repeat="result in $ctrl.songs | orderBy: 'rank'">
        <chord-result
          available-ranks="$ctrl.availableRanks"
          rank-change-handler="$ctrl.rankChangeHandler"
          chord="result">
        </chord-result>
      </md-list>
      <md-button ng-if="$ctrl.songs.length" flex
        class="md-raised md-accent pull-right"
        type="submit" ng-click="$ctrl.saveChart()">
        Save
      </md-button>
    `,
    bindings: {
      availableRanks: '<',
      songs: '<',
      rankChangeHandler: '<',
      saveChart: '<',
    },
  };

  adminWeeklyChartCtrl.$inject = ['Toast', 'WeeklyChart'];
  function adminWeeklyChartCtrl(toast, WeeklyChart) {
    const vm = this;
    this.weeklyChart = {
      year: 2016,
      weekNumber: 20,
      songs: [

      ],
    };
    this.availableRanks = [1, 2, 3, 4, 5];
    this.updateRank = ({ chordKey, rank }) => {
      for (const currSong of this.weeklyChart.songs) {
        if (currSong.chordKey === chordKey) {
          currSong.rank = rank;
        }
      }
    };
    this.rankChangeHandler = ({ rank, artist, title, chordKey }) => {
      this.weeklyChart.songs.push({
        artist,
        title,
        rank,
        chordKey,
      });
    };

    WeeklyChart.getLatestChart()
    .then(result => this.lastWeekChart = result);
    this.filterRanks = oldRanks => {

      const takenRanks = this.weeklyChart.songs.map(song => song.rank);
      return this.availableRanks.filter(rank => {
        return !takenRanks.includes(rank);
      });
    };

    this.addPositionDifference = (weeklyChart, oldWeeklyChart) => {
      let oldSong;
      for (const currSong of weeklyChart) {
        oldSong = oldWeeklyChart[currSong.chordKey];
        if (!oldSong) {
          currSong.positionDifference = null;
        }
        else {
          currSong.positionDifference = oldSong.rank - currSong.rank;
        }
      }
      return weeklyChart;
    };

    this.saveChart = () => {
      const wc = angular.copy(vm.weeklyChart);

      wc.songs = this.addPositionDifference(wc.songs, this.lastWeekChart.songs);

      wc.dateCreated = Date.now();
      if (wc.$$hashKey) {
        delete wc.$$hashKey;
      }
      WeeklyChart.createWeeklyChart(wc)
      .then(result => toast.showSimpleToast('Weekly Chart Added Successfully!'));
    };
  }

  angular.module('playalongWebApp')
		.component('adminWeeklyChart', adminWeeklyChart)
    .component('adminWeeklySearchArea', adminWeeklySearchArea)
    .controller('adminWeeklyChartCtrl', adminWeeklyChartCtrl)
    .component('adminWeeklyChordResults', adminWeeklyChordResults);
})();
