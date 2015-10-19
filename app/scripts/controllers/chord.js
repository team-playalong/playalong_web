
'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:ChordCtrl
 * @description
 * # ChordCtrl
 * Controller of the playalongWebApp
 */

angular.module('playalongWebApp')
  .controller('ChordCtrl',['$scope','$rootScope', '$state','chords', '$stateParams',
    function ($scope,$rootScope,$state,chords, $stateParams) {
    $scope.initCtrl = function() {
      $rootScope.currPage = $scope.chord.artist + ' - ' + $scope.chord.title;
      $scope.chordRating = 5;

      $scope.chord.chordKey = $scope.chord.chordKey || angular.copy($stateParams.chordKey) ;
      chords.increaseChordHitCount($scope.chord.$id);

      $scope.chordFab = {
        topDirections: ['left', 'up'],
        bottomDirections: ['down', 'right'],
        isOpen: false,
        availableModes: ['md-fling', 'md-scale'],
        selectedMode: 'md-fling',
        availableDirections: ['up', 'down', 'left', 'right'],
        selectedDirection: 'up'
      };
    };



  	if (!$stateParams.chordKey) { 
  		$state.go('home'); 
  	}
  	else {
      if (!$scope.chord) //After refresh
      {
        var result = chords.getChordById($stateParams.chordKey);
        if (result) {
          //We now have a reference to the entire chord object
          result.$bindTo($scope, "chord").then(function() {
            $scope.initCtrl();
          });
        }
      }
      else {
        $scope.initCtrl();
      }
	    
  	}

  	$scope.rateChord = function() {
  		if (!$scope.chord ||
  				(!$scope.chord.$id && !$stateParams.chordKey) ||
  				!$scope.chordRating)
  		{
  			return;
  		}
  		chords.rateChord($scope.chord.$id,$scope.chordRating)
  		.then(function() {
  			$scope.addAlert('success','Thanks For Rating...');
  		});
  	};
    
  }]);
