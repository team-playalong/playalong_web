'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:FavoritesCtrl
 * @description
 * # FavoritesCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('FavoritesCtrl',['login','$scope',
  	function (login,$scope) {
    $scope.login = login;
  }]);
