
'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:ChordCtrl
 * @description
 * # ChordCtrl
 * Controller of the playalongWebApp
 */

angular.module('playalongWebApp')
  .controller('ChordCtrl',['$scope','$rootScope', '$state', function ($scope,$rootScope,$state) {
  	if (!$scope.chord) { 
  		$state.go('home'); 
  	}
  	else {
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
	    	
  	}
    
  }]);
