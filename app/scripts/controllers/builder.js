(function() {
  'use strict';

  var BuilderCtrl = function ($scope,chords, $interval,$timeout,$stateParams,$rootScope,toast,login,RegexStore,$state) {
    $scope.login = login;
    $rootScope.currPage = 'Chord Builder';
    $scope.chordRef = null; //Will reference the chord for Firebase process.binding
    $scope.flags = {
      isPreviewMode: false
    };  

    var handleChordSuccess = function(chord) {
      $state.go('builder.edit',{id:chord.$id || chord.chordKey});
      // $scope.chordRef = chord;
      // //We now have a reference to the entire chord object
      // $scope.chordRef.$bindTo($scope, "chord").then(function() {
      //   $scope.chordCreated = true;
      //   toast.showToastByTranslation('builder.alerts.CHORD_ADDED');
      // });
    };

    if ($stateParams && $stateParams.id) //Meaning continue editing existing chord
    {
      var result = chords.getChordById($stateParams.id);
      if (result) {
        //We now have a reference to the entire chord object
        result.$bindTo($scope, "chord").then(function() {
          toast.showToastByTranslation('builder.alerts.START_EDIT');
        });
      }
    }
    else {
      $scope.chord = {
        content: '',
        artist: '',
        title: '',
        youtubeLink: ''
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
      if (!str) {return;}

      $timeout(function(){
        str = str.replace(RegexStore.get('chord'), '<span class="chord">$2$3</span>');
        $scope.chord.content = str;
      }, 0);

    };

    $scope.getTextByMode = function() {
      return $scope.flags.isPreviewMode ? 'Edit' : 'Preview';
    };

    $scope.handleSwitchModes = function() {
      if ($scope.flags.isPreviewMode && $scope.chord && $scope.chord.content)
      {
        $scope.scanForChords($scope.chord.content);
      }
    };
    $scope.handleApproveChange = function() {
      var toastText = $scope.chord && $scope.chord.approved ? 
                        'Chord approved' : 'Chord not approved';
      toast.showSimpleToast(toastText);
    };

    $scope.createDisabled = function() {
      return !$scope.chord.artist || !$scope.chord.title || !$scope.chord.content;
    };
  };

  /**
   * @ngdoc function
   * @name playalongWebApp.controller:BuilderctrlCtrl
   * @description
   * # BuilderctrlCtrl
   * Controller of the playalongWebApp
   */
  angular.module('playalongWebApp')
  .controller('BuilderCtrl',['$scope','chords', '$interval', '$timeout','$stateParams', '$rootScope','toast','login','RegexStore','$state',BuilderCtrl]);
  
})();
