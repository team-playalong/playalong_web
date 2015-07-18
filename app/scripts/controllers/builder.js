'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:BuilderctrlCtrl
 * @description
 * # BuilderctrlCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp').controller('BuilderCtrl', function ($scope, $sce) {

  $scope.$watch('lyrics', function(o, n){
    var htmlLyrics = $scope.lyrics.replace(/\n/g, "<br />");
    $scope.htmlLyrics = $sce.trustAsHtml(htmlLyrics);
  }, true);

  $scope.isCordsOn = false;
  $scope.cords = [ 'A', 'B', 'C', 'E' ];

  $scope.lyrics = '';
  $scope.htmlLyrics = '';
});
