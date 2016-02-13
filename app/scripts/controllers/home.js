(function() {
  'use strict';

  angular.module('playalongWebApp')
  .controller('HomeCtrl',HomeCtrl);
  
  HomeCtrl.$inject = [
    '$scope', '$rootScope','chords','$translate','$q'
  ];
  function HomeCtrl($scope, $rootScope, chords,$translate,$q) {
    $rootScope.currPage = 'home.PAGE_TITLE';
    $scope.searchByOptions = [
      {
        label: 'home.SONG_NAME',
        value: 'title'
      },
      {
        label: 'home.ARTIST',
        value: 'artist'
      }
    ];
    $scope.searchConfig = {
      searchBy: $scope.searchByOptions[0].value,
      searchInput: ''
    };

    $scope.formatResultMessage = function() {
      var deferred = $q.defer();
      var toTranslate;
      var manyResults;
      if (!$scope.searchResults || !$scope.searchResults.length)
      {
        toTranslate = 'home.EMPTY_RESULT_MESSAGE';
      }
      else if ($scope.searchResults && $scope.searchResults.length === 1)
      {
        toTranslate = 'home.SINGLE_RESULT_MESSAGE';
      }
      else if ($scope.searchResults && $scope.searchResults.length > 1)
      {
        manyResults = true;
        toTranslate = 'home.MANY_RESULT_MESSAGE';
      }
      $translate([toTranslate])
      .then(function (translations) {
        var res = translations[toTranslate];
        if (manyResults && res.indexOf('{numResults}') !== -1)
        {
          res = res.replace('{numResults}',$scope.searchResults.length);
        }
        deferred.resolve(res);
      });

      return deferred.promise;
    };

    $scope.handleChordResults = function(results) {
      if (!results || !results.length) {}
      else {
        $scope.searchResults = results;
      }
    };

    $scope.chordsFinallyHandler = function() {
      $scope.formatResultMessage()
      .then(function(message) {
        $scope.resultMessage = message;

        $rootScope.startSpin('stopSearchChordsSpinner');
      });
    };

    $scope.searchChords = function() {
      $rootScope.startSpin('startSearchChordsSpinner');
      $scope.searchResults = [];
      chords.searchChordsBy($scope.searchConfig.searchBy,$scope.searchConfig.searchInput)
      .then($scope.handleChordResults)
      .catch(function(error) {
        $scope.searchResults = [];
        console.warn(error);
      })
      .finally($scope.chordsFinallyHandler);
    };

    //For spinner event listening
    $scope.triggerSearchChords = function() {
      $scope.searchChords();
    };

    $rootScope.$on('$stateChangeSuccess',
    /*jshint unused:false */
    function(event, toState, toParams, fromState, fromParams){
      if (toState.title)
      {
        $rootScope.currPage = toState.title;
      }
    });
    /*jshint unused:true*/
  }
})();
