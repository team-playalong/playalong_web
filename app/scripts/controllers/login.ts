LoginCtrl.$inject = ['$scope', 'login', 'paths'];
function LoginCtrl($scope, login, paths) {
  $scope.login = login;
  $scope.paths = paths;
}

export default LoginCtrl;
