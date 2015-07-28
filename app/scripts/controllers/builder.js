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
      chords.addChord($scope.chord);
    }
    
    
  };

  $scope.chordOps = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
  $scope.rawLyrics = '';

  $scope.chord = {};
}]);
