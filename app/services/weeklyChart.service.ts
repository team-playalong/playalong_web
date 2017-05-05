(function() {
  'use strict';

  interface Song {
    artist: string;
    title: string;
    rank: number;
    chordKey: string;
  }

  interface WeeklyChart {
    dateCreated: number;
    weekNumber: number;
    year: number;
    songs: Array<Song>;
  }

  WeeklyChart.$inject = ['PlyFirebase'];
  function WeeklyChart(PlyFirebase) {
    function arrayToObject(arr) {
      const res = {};

      arr.forEach(curr => {
        res[curr.chordKey] = curr;
      });

      return res;
    }

    function createWeeklyChart(weeklyChart: WeeklyChart) {
      // convert songs into objects
      weeklyChart.songs = this.arrayToObject(weeklyChart.songs);

      return new Promise((resolve, reject) => {
        PlyFirebase.insert('weeklyCharts', weeklyChart)
        .then(result => resolve(result))
        .catch(error => reject(error));
      });

    }

    function getLatestChart() {
      return new Promise((resolve, reject) => {
        PlyFirebase.selecteByAggregate('weeklyCharts', 'dateCreated')
        .then(result => resolve(result))
        .catch(error => reject(error));
      });
    }

    return {
      createWeeklyChart,
      getLatestChart,
      arrayToObject,
    };
  }
  angular.module('playalong.services')
    .factory('WeeklyChart', WeeklyChart);
})();
