/// <reference path="../../ply.d.ts" />
(function() {
  'use strict';

  angular.module('playalongWebApp')
  .controller('HomeCtrl',HomeCtrl)
  .directive('plyHome', PlyHome);

  function PlyHome() {
    return {
      templateUrl: 'pages/home/home.template.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    };
  }

  HomeCtrl.$inject = [
    '$rootScope','chords','$translate','$q'
  ];
  function HomeCtrl($rootScope, chords,$translate,$q) {
    var vm = this;
    
    if (!!window.mixpanel) {
      window.mixpanel.track("ply_page_view_home");  
    }
    $rootScope.currPage = 'home.PAGE_TITLE';
    vm.searchByOptions = [
      {
        label: 'home.SONG_NAME',
        value: 'title'
      },
      {
        label: 'home.ARTIST',
        value: 'artist'
      }
    ];
    vm.searchConfig = {
      searchBy: vm.searchByOptions[0].value,
      searchInput: ''
    };

    //Workaround due to translations
    setTimeout(function() {
      document.querySelector('md-select-value > span').textContent = 'Song Name';
    },200)

    vm.formatResultMessage = function() {
      var deferred = $q.defer();
      var toTranslate;
      var manyResults;
      if (!vm.searchResults || !vm.searchResults.length)
      {
        toTranslate = 'home.EMPTY_RESULT_MESSAGE';
      }
      else if (vm.searchResults && vm.searchResults.length === 1)
      {
        toTranslate = 'home.SINGLE_RESULT_MESSAGE';
      }
      else if (vm.searchResults && vm.searchResults.length > 1)
      {
        manyResults = true;
        toTranslate = 'home.MANY_RESULT_MESSAGE';
      }
      $translate([toTranslate])
      .then(function (translations) {
        var res = translations[toTranslate];
        if (manyResults && res.indexOf('{numResults}') !== -1)
        {
          res = res.replace('{numResults}',vm.searchResults.length);
        }
        deferred.resolve(res);
      });

      return deferred.promise;
    };

    vm.handleChordResults = function(results) {
      if (!results || !results.length) {}
      else {
        vm.searchResults = results;
      }
    };

    vm.chordsFinallyHandler = function() {
      vm.formatResultMessage()
      .then(function(message) {
        vm.resultMessage = message;

        $rootScope.startSpin('stopSearchChordsSpinner');
      });
    };

    vm.searchChords = function() {
      $rootScope.startSpin('startSearchChordsSpinner');
      vm.searchResults = [];
      chords.searchChordsBy(vm.searchConfig.searchBy,vm.searchConfig.searchInput)
      .then(vm.handleChordResults)
      .catch(function(error) {
        vm.searchResults = [];
        console.warn(error);
      })
      .finally(vm.chordsFinallyHandler);
    };

    //For spinner event listening
    vm.triggerSearchChords = function() {
      vm.searchChords();
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
