'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('HomeCtrl', ['$scope', '$rootScope','chords','$state', function ($scope, $rootScope, chords,$state) {
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
      searchInput: ''
  	};
    
  	$scope.searchResults = [];
    $scope.handleChordResults = function(results) {
      $scope.searchResults = results;
    };


  	$scope.searchChords = function() {
  		chords.searchChordsBy($scope.searchConfig.searchBy,$scope.searchConfig.searchInput)
  		.then($scope.handleChordResults)
  		.catch(function(error) {
  			console.warn(error);
  		});
  	};	


  	$scope.goToChordPage = function(chord) {
  		$rootScope.chord = chord;
  		$state.go('chord');
  	};

  }]);
