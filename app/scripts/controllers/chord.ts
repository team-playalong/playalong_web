(function() {
  'use strict';

  angular.module('playalongWebApp')
  .controller('ChordCtrl', ChordCtrl);

  ChordCtrl.$inject = [
    '$scope', '$rootScope', '$state', 'chords', '$stateParams',
    'toast', 'login' , 'Common', '$timeout', 'plyTooltip', 'transposer', '$sce',
    'EqualChordsMap',
  ];
  function ChordCtrl($scope, $rootScope, $state, chords, $stateParams, toast, login, Common, $timeout, plyTooltip, transposer, $sce: ng.ISCEService, EqualChordsMap) {
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
        selectedDirection: 'up',
      };
      //Disable autoscroll on redirect
      $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
        if (fromState.name === 'chord') {
          $timeout(function(){
            $scope.disableAutoscroll();
          }, 0);
        }
      });


      $scope.chordContent = addChordImages($scope.chord.content);
    };  

    $scope.setPopoverHtml = (chord) => {
      return $sce.trustAsHtml(`
        <div>
          <img src="guitar-chords/${chord.trim()}.png" height="100" width="85" alt="No chord Available" />
        </div>
      `);   
    };

    function addChordImages(chordContent: string) {
      
      const regex = /(<span class="chord">)([^<]+)(<\/span>)/g;

      //Replace with equivalent chord image 
      for (let chord in EqualChordsMap) {
        chordContent = chordContent.replace(chord, EqualChordsMap[chord]);
      }

      return chordContent.replace(regex, `<span class="chord" popover-trigger="mouseenter" uib-popover-html="setPopoverHtml('$2')">$2</span>`);
    }

    $scope.disableAutoscroll = function() {
      $scope.autoscrollEnabled = false;
      $scope.autoscrollSpeed = 0;
    };
    $scope.toggleAutoscroll = function() {
      $scope.autoscrollEnabled = !$scope.autoscrollEnabled;

      if (!$scope.autoscrollEnabled) {
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
        var newText = transposer.transpose(oldText, numTones);
        angular.element(value).text(newText);
      });

      $scope.transposition += numTones;
    };

  }  
})();
