(function() {
	'use strict';



  const adminWeeklyChart: ng.IComponentOptions = {
    template: `
      <div  class="md-padding" id="adminWeeklyChart"
          translate-namespace="admin.weeklyChart">
        <admin-weekly-search-area
          rank-change-handler="$ctrl.rankChangeHandler"
          available-ranks="$ctrl.availableRanks"
          weekly-chart="$ctrl.weeklyChart"></admin-weekly-search-area>
        <admin-weekly-chord-results
          songs="$ctrl.weeklyChart.songs"
          available-ranks="$ctrl.availableRanks"
          rank-change-handler="$ctrl.updateRank">
        </admin-weekly-chord-results>
      </div>
    `,
    controller: function adminWeeklyChartCtrl() {
      this.weeklyChart = {
        year: 2016,
        weekNumber: 20,
        songs: [

        ],
      };
      this.availableRanks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      this.updateRank = ({chordKey, rank}) => {
        for (let currSong of this.weeklyChart.songs) {
          if (currSong.chordKey === chordKey) {
            currSong.rank = rank;
          }
        }
      };
      this.rankChangeHandler = ({rank, artist, title, chordKey}) => {
        this.weeklyChart.songs.push({
          artist,
          title,
          rank,
          chordKey,
        });
      };
    },
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
      <md-button flex class="md-raised md-accent" type="submit" ng-click="$ctrl.searchChords()"
        aria-label="Go"
        translate=".SEARCH_BOTTON">
      </md-button>
    `,
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
