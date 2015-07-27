'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:BuilderctrlCtrl
 * @description
 * # BuilderctrlCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp').controller('BuilderCtrl', function ($scope) {
  $scope.notValid = function(){
    alert('blu');
  };

  $scope.sendChord = function(){
    if (!$scope.chord.title){ $scope.notValid(); return; }
    if (!$scope.chord.artist){ $scope.notValid(); return; }
    if (!$scope.chord.lyrics){ $scope.notValid(); return; }

    $scope.chord.lyrics = $scope.rawLyrics;
    // send to firebase
  };

  $scope.chordOps = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
  $scope.rawLyrics = '';

  $scope.chord = {};
});
