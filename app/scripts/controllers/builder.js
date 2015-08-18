'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:BuilderctrlCtrl
 * @description
 * # BuilderctrlCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
.controller('BuilderCtrl',['$scope','chords', '$interval', '$timeout', function ($scope,chords, $interval,$timeout) {
  $scope.chordRef = null; //Will reference the chord for Firebase process.binding
  $scope.notValid = function(){
    //TODO
  };

  $scope.createChordInDb = function(){
      
    // if (!$scope.chord.title){ $scope.notValid(); return; }
    // if (!$scope.chord.artist){ $scope.notValid(); return; }
    
    chords.addChord($scope.chord)
    .then(function(chord) {
      $scope.chordRef = chord;
      //We now have a reference to the entire chord object
      $scope.chordRef.$bindTo($scope, "chord").then(function() {

      $scope.message = 'Chord Added to Database';
      $timeout(function(){
        $scope.message = '';
      }, 1000);

      });
    });
  };

  //Due to binding issues between the contenteditable div and the model
  $interval(function() {
    //TODO - find less hawa solution
    var rawContent = document.getElementById('rawContent').innerHTML;
    $scope.chord.content = rawContent;

  }, 2000, 0, true);

  $scope.chordOps = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
  $scope.rawContent = '';

  $scope.chord = {
    content: '',
    artist: '',
    title: ''
  };

  $scope.createChordInDb();
}]);
