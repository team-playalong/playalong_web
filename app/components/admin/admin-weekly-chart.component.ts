(function() {
	'use strict';



  const adminWeeklyChart: ng.IComponentOptions = {
    template: `
      <div  class="md-padding" id="adminWeeklyChart"
          translate-namespace="admin.weeklyChart">
        <admin-weekly-search-area
          weekly-chart="$ctrl.weeklyChart"></admin-weekly-search-area>
        <admin-weekly-chord-results></admin-weekly-chord-results>
      </div>
    `,
    controller: function adminWeeklyChartCtrl() {
      this.weeklyChart = {
        year: 2016,
        weekNumber: 20,
      };
    },
  };


  const adminWeeklySearchArea = {
    templateUrl: 'components/admin/admin-weekly-search-area.html',
    bindings: {
      weeklyChart: '=',
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
    this.isShowRank = true;

    this.searchChords = () => {
      this.searchResults = [];
      chords.searchChordsBy(this.searchConfig.searchBy, this.searchConfig.searchInput)
        .then(data => this.searchResults = data)
        .catch(error => console.error(error));
    };

    this.availableRanks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }


  angular.module('playalongWebApp')
		.component('adminWeeklyChart', adminWeeklyChart)
    .component('adminWeeklySearchArea', adminWeeklySearchArea);




})();
