'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:BuilderctrlCtrl
 * @description
 * # BuilderctrlCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
.controller('BuilderCtrl',['$scope','chords', '$interval', '$timeout','$stateParams', '$rootScope',
  function ($scope,chords, $interval,$timeout,$stateParams,$rootScope) {
  $rootScope.currPage = 'Chord Builder';
  $scope.chordRef = null; //Will reference the chord for Firebase process.binding
  
  var handleChordSuccess = function(chord) {
    $scope.chordRef = chord;
    //We now have a reference to the entire chord object
    $scope.chordRef.$bindTo($scope, "chord").then(function() {
      $scope.addAlert('success','Chord Added to Database');
    });
  };

  if ($stateParams && $stateParams.id) //Meaning continue editing existing chord
  {
    var result = chords.getChordById($stateParams.id);
    if (result) {
      //We now have a reference to the entire chord object
      result.$bindTo($scope, "chord").then(function() {
        if (document.getElementById('rawContent')) 
        {
          document.getElementById('rawContent').innerHTML = $scope.chord.content; 
        }
        $scope.addAlert('success','You may start editing');
      });
    }
  }
  else {
    $scope.chord = {
      content: '',
      artist: '',
      title: ''
    };
    $scope.rawContent = '';

    $scope.createChordInDb = function(){  
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
      str = str.replace(/($|\b|<div>)((?:G,C,D|A,B,C|E,C,D)|(?:[ABCDEFG](?:#|b)?)(?:\/[ABCDEFG]b)?(?:(?:(?:maj|min|sus|add|aug|dim)(?:\d{0,2}(?:#\d{1,2}|sus\d)?)?)|(?:m\d{0,2}(?:(?:maj|add|#)\d{0,2})?)|(?:-?\d{0,2}(?:\([^)]*\)|#\d{1,2})?))?)(^|\s|&nbsp;*<\/div>|<div>)/g, '<span class="chord">$2</span>');
      $scope.chord.content = str;
  
    }, 0);
  };

  $scope.getTextByMode = function() {
    return $scope.isPreviewMode ? 'Edit' : 'Preview';
  };

  $scope.handleSwitchModes = function() {
    if ($scope.isPreviewMode)
    {
      var rawContent = angular.element('#rawContent').html();
      if (rawContent)
      {
        $scope.scanForChords(rawContent);        
      }
      
    }
  };
}]);
