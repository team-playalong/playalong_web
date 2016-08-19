(function() {
	'use strict';

	angular.module('playalongWebApp')
  .directive('plyFavorites', PlyFavorites)
  .controller('FavoritesCtrl', FavoritesCtrl);


  function PlyFavorites() {
    return {
      controller: FavoritesCtrl,
      controllerAs: 'fav',
      template: `
      <div id="favorites"
           translate-namespace="favorites">
        <md-card layout-align="center" class="ply-search-results">
          <md-card-content>

            <div ng-if="fav.login.isLoggedIn() && !!fav.favorites">
              <h3 translate=".TITLE"></h3>
              <md-list>
                <md-list-item class="md-2-line clickable"  ng-repeat="favorite in fav.favorites track by $index" >
                  <div  class="md-list-item-text"
                        ng-click="goToChordPage(favorite.chordKey)">
                    <ng-md-icon class="pull-right" ng-click="fav.removeFavorite($event, favorite)" icon="delete" size="30"></ng-md-icon>
                    <h3 ng-bind="favorite.artist"></h3>
                    <p ng-bind="favorite.title"></p>
                  </div>
                  <md-divider ></md-divider>
                </md-list-item>
              </md-list>
            </div>
            <div class="ply-overlay ply-relative" ng-if="!fav.login.isLoggedIn()">
              <div class="jumbotron ply-transparent text-center ply-white">
                <h1 translate=".LOGIN_TITLE"></h1>
              </div>
            </div>
            <div ng-if="fav.login.isLoggedIn() && !fav.favorites">
              <div class="jumbotron ply-transparent text-center">
                <h2 translate=".NO_FAVORITES"></h2>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
      `
    };
  }


	FavoritesCtrl.$inject = [
		'login','user','$rootScope','$scope', 'toast',
	];
	function FavoritesCtrl(login,user,$rootScope,$scope, toast) {
    var vm = this;
    if (!!window.mixpanel) {
      window.mixpanel.track("ply_page_view_favorites");
    }

    vm.removeFavorite = ($event, favorite) => {
      $event.preventDefault();
      $event.stopPropagation();
      var params = {
        isAddFlag: false,
        chordObj: {
          chordKey: favorite.chordKey,
          artist: favorite.artist,
          title: favorite.title,
        },
        userKey: login.getUser().userKey,
      };
      user.addRemoveFavorites(params)
      .then(() => {
        toast.showToastByTranslation('favorites.REMOVED_MESSAGE');
        vm.init();
      });
    };

		$rootScope.currPage = 'favorites.PAGE_TITLE';
  	vm.init = () => {
      vm.favorites = null;
  		vm.userModel = login.getUser();
  		if (vm.userModel && vm.userModel.userKey) {
  			$rootScope.startSpin();
  			user.getFavorites(vm.userModel.userKey)
	  		.then(function(data) {
	  			if (data)
	  			{
	  				vm.favorites = data;
	  			}
          $rootScope.stopSpin();
	  		})
          .catch($rootScope.stopSpin);
  		}

  	};
    vm.login = login;
    if (login.isLoggedIn())
    {
    	vm.init();
    }
    else {
    	$scope.$on('plyUserLoggedIn', vm.init);
    }
  }
})();
