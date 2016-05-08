(function() {
  'use strict';

  angular.module('playalongWebApp')
  .controller('ChordCtrl',ChordCtrl);

  ChordCtrl.$inject = [
    '$scope','$rootScope','$state','chords','$stateParams',
    'toast','login','Common','$timeout','plyTooltip','transposer'
  ];
  function ChordCtrl($scope,$rootScope,$state,chords, $stateParams,toast,login,Common,$timeout,plyTooltip,transposer) {
    $scope.login = login;
    $scope.initCtrl = function() {
      if (!!window.mixpanel) {
        window.mixpanel.track("ply_page_view_chords");  
      }
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

    $scope.transposition = 0;
    $scope.transposeChords = function(numTones) {
      var chords = angular.element(document.querySelectorAll('.ply-chord-container-content .chord'));
      
      angular.forEach(chords, function(value){
        var oldText = angular.element(value).text();
        var newText = transposer.transpose(oldText,numTones);
        angular.element(value).text(newText);
      });

      $scope.transposition += numTones;
    };

  }  
})();