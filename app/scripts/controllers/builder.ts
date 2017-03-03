(function() {
  'use strict';

  BuilderCtrl.$inject = [
    '$scope', 'chords', '$timeout', '$stateParams',
    '$rootScope', 'Toast', 'login', 'RegexStore', '$state', 'PlyNotifier',
  ];
  function BuilderCtrl($scope, chords, $timeout, $stateParams, $rootScope, toast, login, RegexStore, $state, PlyNotifier) {
    if (!!window.mixpanel) {
        window.mixpanel.track('ply_page_view_builder');
      }
    $scope.login = login;
    $rootScope.currPage = 'Chord Builder';
    $scope.chordRef = null; //Will reference the chord for Firebase process.binding
    $scope.flags = {
      isPreviewMode: false,
    };

    function handleChordSuccess(chord) {
      PlyNotifier.notifyChordAdded({chordId: chord.$id});
      $state.go('builder.edit', {id: chord.$id || chord.chordKey});
    }

    if ($stateParams && $stateParams.id) { //Meaning continue editing existing chord
      chords.getChordById({chordId: $stateParams.id, isFirebaseObject: true})
      .then(result => {
        if (result) {
          //We now have a reference to the entire chord object
          result.$bindTo($scope, 'chord').then(function() {
            toast.showToastByTranslation('builder.alerts.START_EDIT');
          });
        }
      });
    }
    else {
      $scope.chord = {
        content: '',
        artist: '',
        title: '',
        youtubeLink: '',
      };

      $scope.createChordInDb = function(){
        $scope.chord.creator = login.getUser() ? login.getUser().uid : '';
        $scope.isApproved = login.isSuperUser();
        chords.addChord($scope.chord)
        .then(handleChordSuccess)
        .catch(function(error){
            console.warn(error);
          });
      };
    }


    $scope.scanForChords = function(str){
      if (!str) { return; }

      $timeout(function(){
        str = str.replace(RegexStore.get('chord'), '<span class="chord">$2$3</span>');
        $scope.chord.content = str;
      }, 0);

    };

    $scope.getTextByMode = function() {
      return $scope.flags.isPreviewMode ? 'Edit' : 'Preview';
    };

    $scope.handleSwitchModes = function() {
      if ($scope.flags.isPreviewMode && $scope.chord && $scope.chord.content) {
        $scope.scanForChords($scope.chord.content);
      }
    };
    $scope.handleApproveChange = function() {
      const toastText = $scope.chord && $scope.chord.approved ?
                        'Chord approved' : 'Chord not approved';
      toast.showSimpleToast(toastText);
    };

    $scope.createDisabled = function() {
      return !$scope.chord.artist || !$scope.chord.title || !$scope.chord.content;
    };
  }

  angular.module('playalongWebApp')
  .controller('BuilderCtrl', BuilderCtrl);

})();
