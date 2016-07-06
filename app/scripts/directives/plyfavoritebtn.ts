(function() {
  'use strict';

angular.module('playalongWebApp')
.directive('plyFavoriteBtn',['login', function (login) {
  return {
    template: `
      <md-button class="md-mini ply-icon-favorites"
          ng-click="toggleFavorites()"
          aria-label="favorites">

        <i class="fa fa-heart" ng-if="isFavorite">
          <md-tooltip>{{'favorites.REMOVE_MESSAGE' | translate}}</md-tooltip>
        </i>
        <i class="fa fa-heart-o" ng-if="!isFavorite">
          <md-tooltip>{{'favorites.ADD_MESSAGE' | translate}}</md-tooltip>
        </i>
        <span hide-sm translate="favorites.PAGE_TITLE"></span>
      </md-button>
    `,
    controller: 'PlyfavoritebtnCtrl',
    restrict: 'E',
    scope: {
      chord: '='
    },
    link: function postLink(scope, element/*, attrs*/) {
      if (!login.isLoggedIn())
      {
        element.css('display', 'none');
      }
      scope.$on('plyUserLoggedIn', function(){
        element.css('display', 'block');
      });
      scope.$on('plyUserLoggedOut',function() {
        element.css('display', 'none');
      });
    }
  };
}]);

})();
