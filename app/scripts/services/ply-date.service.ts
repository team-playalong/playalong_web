(function() {
  'use strict';

  angular.module('playalongWebApp')
  .service('PlyDate', PlyDate);

  PlyDate.$inject = [];
  function PlyDate($mdToast, $translate) {

    function getAllWeekNumbers() {
      let allWeekNumbers = [];
      for (let i = 1; i < 55; ++i) {
        allWeekNumbers.push(i);
      }

      return allWeekNumbers;
    }

    function getAllYears() {
      return [2016, 2017];
    }
    return {
      getAllWeekNumbers,
      getAllYears,
    };
  }
})();
