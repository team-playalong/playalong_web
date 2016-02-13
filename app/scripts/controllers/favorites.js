(function() {
	'use strict';

	var FavoritesCtrl = function (login,$scope,user,$rootScope) {
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
  };

	/**
	 * @ngdoc function
	 * @name playalongWebApp.controller:FavoritesCtrl
	 * @description
	 * # FavoritesCtrl
	 * Controller of the playalongWebApp
	 */
	angular.module('playalongWebApp')
  .controller('FavoritesCtrl',[
  	'login',
  	'$scope',
  	'user',
  	'$rootScope',
  	FavoritesCtrl
	]);
	
})();
