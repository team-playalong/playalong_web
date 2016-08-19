(function () {
    'use strict';
    angular.module('playalongWebApp')
        .directive('plyFavorites', PlyFavorites)
        .controller('FavoritesCtrl', FavoritesCtrl);
    function PlyFavorites() {
        return {
            controller: FavoritesCtrl,
            controllerAs: 'fav',
            template: "\n      <div id=\"favorites\"\n           translate-namespace=\"favorites\">\n        <md-card layout-align=\"center\" class=\"ply-search-results\">\n          <md-card-content>\n\n            <div ng-if=\"fav.login.isLoggedIn() && !!fav.favorites\">\n              <h3 translate=\".TITLE\"></h3>\n              <md-list>\n                <md-list-item class=\"md-2-line clickable\"  ng-repeat=\"favorite in fav.favorites track by $index\" >\n                  <div  class=\"md-list-item-text\"\n                        ng-click=\"goToChordPage(favorite.chordKey)\">\n                    <ng-md-icon class=\"pull-right\" ng-click=\"fav.removeFavorite($event, favorite)\" icon=\"delete\" size=\"30\"></ng-md-icon>\n                    <h3 ng-bind=\"favorite.artist\"></h3>\n                    <p ng-bind=\"favorite.title\"></p>\n                  </div>\n                  <md-divider ></md-divider>\n                </md-list-item>\n              </md-list>\n            </div>\n            <div class=\"ply-overlay ply-relative\" ng-if=\"!fav.login.isLoggedIn()\">\n              <div class=\"jumbotron ply-transparent text-center ply-white\">\n                <h1 translate=\".LOGIN_TITLE\"></h1>\n              </div>\n            </div>\n            <div ng-if=\"fav.login.isLoggedIn() && !fav.favorites\">\n              <div class=\"jumbotron ply-transparent text-center\">\n                <h2 translate=\".NO_FAVORITES\"></h2>\n              </div>\n            </div>\n          </md-card-content>\n        </md-card>\n      </div>\n      "
        };
    }
    FavoritesCtrl.$inject = [
        'login', 'user', '$rootScope', '$scope', 'toast',
    ];
    function FavoritesCtrl(login, user, $rootScope, $scope, toast) {
        var vm = this;
        if (!!window.mixpanel) {
            window.mixpanel.track("ply_page_view_favorites");
        }
        vm.removeFavorite = function ($event, favorite) {
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
                .then(function () {
                toast.showToastByTranslation('favorites.REMOVED_MESSAGE');
                vm.init();
            });
        };
        $rootScope.currPage = 'favorites.PAGE_TITLE';
        vm.init = function () {
            vm.favorites = null;
            vm.userModel = login.getUser();
            if (vm.userModel && vm.userModel.userKey) {
                $rootScope.startSpin();
                user.getFavorites(vm.userModel.userKey)
                    .then(function (data) {
                    if (data) {
                        vm.favorites = data;
                    }
                    $rootScope.stopSpin();
                })
                    .catch($rootScope.stopSpin);
            }
        };
        vm.login = login;
        if (login.isLoggedIn()) {
            vm.init();
        }
        else {
            $scope.$on('plyUserLoggedIn', vm.init);
        }
    }
})();
//# sourceMappingURL=favorites.js.map