'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('LoginCtrl', ['$scope','login',
		function($scope,login) {
		$scope.loginSrv = login;
    $scope.loginSocial = function(platform) {
      login.loginSocial(platform)
      .then(function(data){
      	console.log(data);
      });
    };
  }]);