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
  	console.log(chords);

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
  		searchBy: $scope.searchByOptions[0].value
  	};
    
  	$scope.searchResults = [];

  	$scope.searchChords = function() {
  		chords.searchChordsBy($scope.searchConfig.searchBy,$scope.searchConfig.searchInput)
  		.then(function(results) {
  			$scope.searchResults = results;
  		})
  		.catch(function(error) {
  			console.warn(error);
  		});
  	};	


  	$scope.goToChordPage = function(chord) {
  		$rootScope.chord = chord;
  		$state.go('chord');
  	};

  }]);
