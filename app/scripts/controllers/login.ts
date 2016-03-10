(function() {
  'use strict';

  angular.module('playalongWebApp')
  .controller('LoginCtrl',LoginCtrl);  

  LoginCtrl.$inject = ['$scope','login','paths'];
  function LoginCtrl($scope,login,paths) {
    $scope.login = login;
    $scope.paths = paths; 
    

    $scope.loginSocial = function(platform) {
      login.loginSocial(platform)
      .then(function(/*data*/){
      });
    };

    $scope.setAvatarImage = function() {
      if (!login.isLoggedIn())
      {
        return paths.images.emptyAvatar;
      }
      else { //get the image from the auth object
        var auth = $scope.login.getAuth();
        if (auth && auth.provider)
        {
          return auth[auth.provider].profileImageURL;
        }
      }
    };
  }
})();
