'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:BuilderctrlCtrl
 * @description
 * # BuilderctrlCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
.controller('BuilderCtrl',['$scope','chords', function ($scope,chords) {
  console.log(chords);
  $scope.chordRef = null; //Will reference the chord for Firebase process.binding

  $scope.notValid = function(){
    //TODO
  };

  $scope.saveChord = function(){
      
    if (!$scope.chord.title){ $scope.notValid(); return; }
    if (!$scope.chord.artist){ $scope.notValid(); return; }


    //TODO - find less hawa solution
    var rawLyrics = document.getElementById('rawLyrics').innerHTML;

    if (rawLyrics) {
      $scope.chord.lyrics = rawLyrics;
      chords.addChord($scope.chord)
      .then(function(chord) {
        $scope.chordRef = chord;
        //We now have a reference to the entire object
        $scope.chordRef.$bindTo($scope, "chord").then(function() {
          console.log('binded!');
        });
      });
    }
    
    
  };

  $scope.chordOps = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
  $scope.rawContent = '';

  $scope.chord = {
    content: ''
  };

  $scope.$watch('rawContent', function(newVal) {
    console.log('I was Watched');
    $scope.chord.content = newVal;
   });


}]);
