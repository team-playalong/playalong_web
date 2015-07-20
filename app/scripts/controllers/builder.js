'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:BuilderctrlCtrl
 * @description
 * # BuilderctrlCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp').controller('BuilderCtrl', function ($scope, $sce) {
  $scope.cords = [ 'A', 'B', 'C', 'E' ];

  $scope.lyrics = '';
});
