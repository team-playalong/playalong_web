'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:ChordCtrl
 * @description
 * # ChordCtrl
 * Controller of the playalongWebApp
 */

angular.module('playalongWebApp')
  .controller('ChordCtrl',['$scope','$rootScope', function ($scope,$rootScope) {
	$scope.chord = {
	    "id": 1,
	    "artist": "Asaf Avidan",
	    "title": "Gold Shadow",
	    "rating": 4,
	    "imgUrl": "http://appleseedsmusic.com/wp-content/uploads/2014/02/Asaf+Avidan.jpg",
	    "html": "" 
	};
    $rootScope.currPage = $scope.chord.artist + ' - ' + $scope.chord.title;
    $scope.chordRating = 5;

    $scope.chordFab = {
	    topDirections: ['left', 'up'],
	    bottomDirections: ['down', 'right'],
	    isOpen: false,
	    availableModes: ['md-fling', 'md-scale'],
	    selectedMode: 'md-fling',
	    availableDirections: ['up', 'down', 'left', 'right'],
	    selectedDirection: 'up'
	  };
    
  }]);
