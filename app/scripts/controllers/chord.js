'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:ChordCtrl
 * @description
 * # ChordCtrl
 * Controller of the playalongWebApp
 */

angular.module('playalongWebApp')
  .controller('ChordCtrl',['$scope','$rootScope', '$state','chords', '$stateParams','toast','login','Common','$timeout','plyTooltip',
    function ($scope,$rootScope,$state,chords, $stateParams,toast,login,Common,$timeout,plyTooltip) {
    
    var setChordsPopover = function() {
      
      $scope.$evalAsync(function(){
        angular.element(document).ready(function() {
          angular.forEach(angular.element('.chord'), function(value){
            plyTooltip.setTooltip(value);
          });
        });
        // var container = angular.element('.ply-chord-container-contents');
        // console.log(container);
        // $compile(container.contents())($scope);
      });
      
    };
    


    $scope.initCtrl = function() {
      $rootScope.currPage = $scope.chord.artist + ' - ' + $scope.chord.title;
      $rootScope.pageTitle = 'Playalong - ' + $scope.chord.artist + ' ' + $scope.chord.title;
      $scope.chordRating = $scope.chord.rating || 1;
      $scope.disableAutoscroll();
      $scope.chord.chordKey = $scope.chord.chordKey || angular.copy($stateParams.chordKey) ;
      chords.increaseChordHitCount($scope.chord.$id || $scope.chord.chordKey);
      $scope.plyTooltip = plyTooltip;
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
       /*jshint unused:false*/
      //Disable autoscroll on redirect
      $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
        if (fromState.name === 'chord')
        {
          $timeout(function(){
            $scope.disableAutoscroll();  
          },0);
          
        }
      });
     /*jshint unused:true*/
      setChordsPopover();
    };


    $scope.disableAutoscroll = function() {
      $scope.autoscrollEnabled = false;
      $scope.autoscrollSpeed = 0;
    };
    $scope.toggleAutoscroll = function() {
      $scope.autoscrollEnabled = !$scope.autoscrollEnabled;

      if (!$scope.autoscrollEnabled)
      {
        $scope.disableAutoscroll();
      }
    };
    
    $scope.isSuperUser = function() {
      return login.getUser() && login.getUser().userType.indexOf('superuser') !== -1;
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

    
    
  }]);
