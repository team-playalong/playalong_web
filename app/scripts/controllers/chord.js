
'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:ChordCtrl
 * @description
 * # ChordCtrl
 * Controller of the playalongWebApp
 */

angular.module('playalongWebApp')
  .controller('ChordCtrl',['$scope','$rootScope', '$state','chords', function ($scope,$rootScope,$state,chords) {
  	if (!$scope.chord) { 
  		$state.go('home'); 
  	}
  	else {
	    $rootScope.currPage = $scope.chord.artist + ' - ' + $scope.chord.title;
	    $scope.chordRating = 5;

	    chords.increaseChordHitCount($scope.chord.chordKey);

	    $scope.chordFab = {
		    topDirections: ['left', 'up'],
		    bottomDirections: ['down', 'right'],
		    isOpen: false,
		    availableModes: ['md-fling', 'md-scale'],
		    selectedMode: 'md-fling',
		    availableDirections: ['up', 'down', 'left', 'right'],
		    selectedDirection: 'up'
		  };
	    	
  	}

  	$scope.rateChord = function() {
  		if (!$scope.chord ||
  				!$scope.chord.chordKey ||
  				!$scope.chordRating)
  		{
  			return;
  		}
  		chords.rateChord($scope.chord.chordKey,$scope.chordRating)
  		.then(function() {
  			$scope.addAlert('success','Thanks For Rating...');
  		});
  	};
    
  }]);
