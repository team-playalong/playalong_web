'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:BuilderctrlCtrl
 * @description
 * # BuilderctrlCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp').controller('BuilderCtrl', function ($scope, $sce) {
  $scope.cordOps = [ 'A', 'B', 'C', 'E' ];
  $scope.rawLyrics = '';

  $scope.$watch('rawLyrics', function(o){
    $scope.chord['lyrics'] = o;
  });

  $scope.chord = {};
});
