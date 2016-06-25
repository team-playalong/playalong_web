(function() {
  'use strict';

angular.module('playalongWebApp')
.directive('plyFavoriteBtn',['login', function (login) {
  return {
    templateUrl: 'views/templates/ply-favorite-btn.html',
    controller: 'PlyfavoritebtnCtrl',
    restrict: 'E',
    scope: {
      chord: '='
    },
    link: function postLink(scope, element/*, attrs*/) {
      if (!login.isLoggedIn())
      {
        element.css('display', 'block');
      }
      scope.$on('plyUserLoggedIn', function(){
        element.show();
      });
      scope.$on('plyUserLoggedOut',function() {
        element.css('display', 'none');
      });
    }
  };
}]);

})();
