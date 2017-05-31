const plyFavoriteBtn = {
  template: `
    <favorite-btn
      click="$ctrl.toggleFavorites"
      isFavorite="$ctrl.isFavorite"
    >
    </favorite-btn>
  `,
  controller: 'PlyfavoritebtnCtrl',
  bindings: {
    chord: '<',
  },
};

export default plyFavoriteBtn;
