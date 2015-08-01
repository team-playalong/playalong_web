'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('HomeCtrl', ['$scope', '$rootScope','chords', function ($scope, $rootScope, chords) {
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
  			console.log(results);
  			$scope.searchResults = results;
  		})
  		.catch(function(error) {
  			console.warn(error);
  		});
		// $scope.searchResults = [
		// 	{
		// 	  "id": 1,
		// 	  "artist": "Nadav Guedj",
		// 	  "title": "Golden Boy",
		// 	  "rating": 4,
		// 	  "imagePath": 'http://www.eurovision.tv/save-files/resizes/1a/91/f8/4e/7d/f5/3c/2b/8e/54/e7/c3/54/33/50/66/Nadav_Guedj-_by_Photographer_Ronen_Akerman.jpg'
		// 	},
		// 	{
		// 	  "id": 2,
		// 	  "artist": "Asaf Avidan",
		// 	  "title": "Gold Shadow",
		// 	  "rating": 3,
		// 	  "imagePath": 'http://pastdaily.com/wp-content/uploads/2013/02/asafavidanasafavidan-resize.jpg'
		// 	}
		// ];  		
  	};

  }]);
