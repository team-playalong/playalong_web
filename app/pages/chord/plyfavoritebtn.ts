const plyFavoriteBtn = {
  template: `
    <favorite-btn
      click="$ctrl.toggleFavorites"
      is-favorite="$ctrl.isFavorite"
    >
    </favorite-btn>
  `,
  controller: 'PlyfavoritebtnCtrl',
  bindings: {
    chord: '<',
  },
};

export default plyFavoriteBtn;
