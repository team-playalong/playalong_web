(function () {
    'use strict';
    angular.module('playalongWebApp')
        .directive('plyFavoriteBtn', ['login', function (login) {
            return {
                template: "\n      <md-button class=\"md-mini ply-icon-favorites\"\n          ng-click=\"toggleFavorites()\"\n          aria-label=\"favorites\">\n\n        <i class=\"fa fa-heart\" ng-if=\"isFavorite\">\n          <md-tooltip>{{'favorites.REMOVE_MESSAGE' | translate}}</md-tooltip>\n        </i>\n        <i class=\"fa fa-heart-o\" ng-if=\"!isFavorite\">\n          <md-tooltip>{{'favorites.ADD_MESSAGE' | translate}}</md-tooltip>\n        </i>\n        <span hide-sm translate=\"favorites.PAGE_TITLE\"></span>\n      </md-button>\n    ",
                controller: 'PlyfavoritebtnCtrl',
                restrict: 'E',
                scope: {
                    chord: '='
                },
                link: function postLink(scope, element /*, attrs*/) {
                    if (!login.isLoggedIn()) {
                        element.css('display', 'none');
                    }
                    scope.$on('plyUserLoggedIn', function () {
                        element.css('display', 'block');
                    });
                    scope.$on('plyUserLoggedOut', function () {
                        element.css('display', 'none');
                    });
                }
            };
        }]);
})();
//# sourceMappingURL=plyfavoritebtn.js.map