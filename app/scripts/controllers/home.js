'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('HomeCtrl', ['$scope', '$rootScope','chords',
      function ($scope, $rootScope, chords) {
    $rootScope.currPage = 'Search';
  	$scope.searchByOptions = [
  		{
  			label: 'Song Name',
  			value: 'title'
  		},
  		{
  			label: 'Artist',
  			value: 'artist'
  		}
  	];
  	$scope.searchConfig = {
  		searchBy: $scope.searchByOptions[0].value,
      searchInput: null
  	};
    
  	$scope.searchResults = [];
    $scope.handleChordResults = function(results) {
      $scope.searchResults = results;
    };


  	$scope.searchChords = function() {
      $scope.startSpin();
  		chords.searchChordsBy($scope.searchConfig.searchBy,$scope.searchConfig.searchInput)
  		.then($scope.handleChordResults)
  		.catch(function(error) {
  			console.warn(error);
  		})
      .finally(function() { 
        $scope.stopSpin();  
      });
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

  }]);
