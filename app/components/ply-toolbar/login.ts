import { Paths } from '../../config/config.constants';

LoginCtrl.$inject = ['$scope', 'login'];
function LoginCtrl($scope, login) {
  $scope.login = login;
  $scope.paths = Paths;
}

export default LoginCtrl;
