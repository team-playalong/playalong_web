plyFavoriteBtn.$inject = ['login'];
function plyFavoriteBtn(login) {
  return {
    template: `
      <favorite-btn
        ng-if="login.isLoggedIn()"
        ng-click="toggleFavorites()"
        isFavorite="isFavorite"
      >
      </favorite-btn>
    `,
    controller: 'PlyfavoritebtnCtrl',
    restrict: 'E',
    scope: {
      chord: '=',
    },
  };
}

export default plyFavoriteBtn;
