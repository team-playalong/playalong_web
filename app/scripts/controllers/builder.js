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

    // send to firebase
  };

  $scope.cordOps = [ 'A', 'B', 'C', 'E' ];
  $scope.rawLyrics = '';

  $scope.$watch('rawLyrics', function(o){
    $scope.chord['lyrics'] = o;
  });

  $scope.chord = {};
});
