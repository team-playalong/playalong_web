
'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:ChordCtrl
 * @description
 * # ChordCtrl
 * Controller of the playalongWebApp
 */

angular.module('playalongWebApp')
  .controller('ChordCtrl',['$scope','$rootScope', '$state','chords', '$stateParams','toast','login','Common',
    function ($scope,$rootScope,$state,chords, $stateParams,toast,login,Common) {
    $scope.initCtrl = function() {
      $rootScope.currPage = $scope.chord.artist + ' - ' + $scope.chord.title;
      $scope.chordRating = $scope.chord.rating || 1;
      $scope.autoscrollSpeed = 0;
      $scope.autoscrollEnabled = false;

      $scope.chord.chordKey = $scope.chord.chordKey || angular.copy($stateParams.chordKey) ;
      chords.increaseChordHitCount($scope.chord.$id || $scope.chord.chordKey);

      $scope.isRtl = Common.isRtlContent($scope.chord.content);

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
          $rootScope.startSpin();
          //We now have a reference to the entire chord object
          result.$bindTo($scope, "chord")
          .then(function() {
            $scope.initCtrl();
          })
          .finally(function() {
            $rootScope.stopSpin();
          });
        }
      }
      else {
        $scope.initCtrl();
      }
	    
  	}

    $scope.toggleAutoscroll = function() {
      $scope.autoscrollEnabled = !$scope.autoscrollEnabled;
    };
  	

    $scope.isSuperUser = function() {
      return login.getUser() && login.getUser().userType.indexOf('superuser') !== -1;
    };
    
  }]);
