(function() {
	'use strict';

	angular.module('playalongWebApp')
  .controller('FavoritesCtrl',FavoritesCtrl);
	
	FavoritesCtrl.$inject = [
		'login','$scope','user','$rootScope'
	];
	function FavoritesCtrl(login,$scope,user,$rootScope) {
		$scope.currPage = 'favorites.PAGE_TITLE';
  	$scope.init = function() {
  		$scope.userModel = login.getUser();
  		if ($scope.userModel && $scope.userModel.userKey)
  		{
  			$rootScope.startSpin();
  			user.getFavorites($scope.userModel.userKey)
	  		.then(function(data) {
	  			if (data)
	  			{
	  				$scope.favorites = data;
	  			}
	  		})
	  		.finally($rootScope.stopSpin);	
  		}
  		
  	};
    $scope.login = login;
    if (login.isLoggedIn())
    {
    	$scope.init();
    }
    else {
    	$scope.$on('plyUserLoggedIn',$scope.init);
    }
  }
})();
