import * as angular from 'angular';

import Common from '../../services/ply-utils/common';
import Toast from '../../services/ply-utils/Toast';
import ChordModel from './chord.model';
import Transposer, { EqualChordsMap } from './Transposer';

ChordCtrl.$inject = [
  '$scope', '$rootScope', '$state', 'chords', '$stateParams',
  'login' , '$timeout', '$sce',
  '$translate',
];
export function ChordCtrl(
  $scope, $rootScope, $state, chords, $stateParams, login, $timeout,
  $sce: ng.ISCEService, EqualChordsMap,
  $translate,
) {
  $scope.ChordModel = ChordModel;
  $scope.login = login;
  $scope.initCtrl = function() {
    if (!!window.mixpanel) {
      window.mixpanel.track('ply_page_view_chords');
    }
    $rootScope.currPage = $scope.chord.artist + ' - ' + $scope.chord.title;
    $rootScope.pageTitle = 'Playalong - ' + $scope.chord.artist + ' ' + $scope.chord.title;
    $scope.chordRating = $scope.chord.rating || 1;
    $scope.disableAutoscroll();
    $scope.toggleAutoscroll();
    $scope.chord.chordKey = $scope.chord.chordKey || angular.copy($stateParams.chordKey) ;
    chords.increaseChordHitCount($scope.chord.$id || $scope.chord.chordKey);
    $scope.isRtl = Common.isRtlContent($scope.chord.content);
    $scope.chordContentClass = 'ply-chord-container-content';
    $scope.chordFab = {
      topDirections: ['left', 'up'],
      bottomDirections: ['down', 'right'],
      isOpen: false,
      availableModes: ['md-fling', 'md-scale'],
      selectedMode: 'md-fling',
      availableDirections: ['up', 'down', 'left', 'right'],
      selectedDirection: 'up',
    };
    // Disable autoscroll on redirect
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

  $scope.setPopoverHtml = (chord = '') => {
    const chordFormatted = encodeURIComponent(chord.trim());
    return $sce.trustAsHtml(`
      <div>
        <img src="assets/images/guitar-chords/${chordFormatted}.png" height="100" width="85" alt="No chord Available" />
      </div>
    `);
  };

  $scope.ratingChanged = val => {
    // Rate chord in the db
    chords.rateChord($scope.chord.$id || $scope.chord.chordKey, val)
    .then(() => {
      $scope.hasRated = true;
      $scope.chordRating = val;
      $translate(['chord.RATING_SUCCESS'])
      .then(translations => {
        Toast.showSimpleToast(translations['chord.RATING_SUCCESS'] || 'Thanks For Rating');
      });

    });
  };

  function addChordImages(chordContent = '') {
    let newChordContent = chordContent;
    const regex = /(<span class="chord">)([^<]+)(<\/span>)/g;

    // Replace with equivalent chord image
    for (const chord in EqualChordsMap) {
      newChordContent = newChordContent.replace(chord, EqualChordsMap[chord]);
    }

    return newChordContent.replace(regex, `<span class="chord" popover-trigger="mouseenter" uib-popover-html="setPopoverHtml('$2')">$2</span>`);
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

  if (!$stateParams.chordKey) {
    $state.go('home');
  }
  else {
    if (!$scope.chord || !$scope.chord.content) { // After refresh
      $scope.isChordSpinnerActive = true;
      chords.getChordById({ chordId: $stateParams.chordKey })
      .then(result => {
        if (result) {
          $scope.chord = result;
          $scope.initCtrl();
        }
      })
      .catch($rootScope.stopSpin)
      .then(() => $scope.isChordSpinnerActive = false);
    }
    else {
      $scope.initCtrl();
    }

  }

  $scope.transposition = 0;
  $scope.transposeChords = function(numTones) {
    const chords = angular.element(document.querySelectorAll('.ply-chord-container-content .chord'));

    angular.forEach(chords, function(value){
      const oldText = angular.element(value).text();
      const newText = Transposer.transpose(oldText, numTones);
      angular.element(value).text(newText);
    });

    $scope.transposition += numTones;
  };

}
export const chordComponent = {
  controller: ChordCtrl,
  templateUrl: './app/pages/chord/chord.html',
};
