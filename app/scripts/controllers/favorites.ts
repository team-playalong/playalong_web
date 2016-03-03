(function() {
	'use strict';

	angular.module('playalongWebApp')
  .directive('plyFavorites',PlyFavorites)
  .controller('FavoritesCtrl',FavoritesCtrl);
	

  function PlyFavorites() {
    return {
      controller: FavoritesCtrl,
      controllerAs: 'fav',
      templateUrl: '../../views/favorites.html'
    };
  }


	FavoritesCtrl.$inject = [
		'login','user','$rootScope','$scope'
	];
	function FavoritesCtrl(login,user,$rootScope,$scope) {
    var vm = this;
    if (!!window.mixpanel) {
      window.mixpanel.track("ply_page_view_favorites");  
    }
		$rootScope.currPage = 'favorites.PAGE_TITLE';
  	vm.init = function() {
  		vm.userModel = login.getUser();
  		if (vm.userModel && vm.userModel.userKey)
  		{
  			$rootScope.startSpin();
  			user.getFavorites(vm.userModel.userKey)
	  		.then(function(data) {
	  			if (data)
	  			{
	  				vm.favorites = data;
	  			}
	  		})
	  		.finally($rootScope.stopSpin);	
  		}
  		
  	};
    vm.login = login;
    if (login.isLoggedIn())
    {
    	vm.init();
    }
    else {
    	$scope.$on('plyUserLoggedIn',vm.init);
    }
  }
})();
