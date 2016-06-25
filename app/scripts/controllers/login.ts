(function() {
  'use strict';

  angular.module('playalongWebApp')
  .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', 'login', 'paths'];
  function LoginCtrl($scope, login, paths) {
    $scope.login = login;
    $scope.paths = paths;
  }
})();
