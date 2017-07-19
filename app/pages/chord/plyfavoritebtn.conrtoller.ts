import Toast from '../../services/ply-utils/toast';

PlyfavoritebtnCtrl.$inject = ['$scope', 'user', 'login'];
function PlyfavoritebtnCtrl($scope, user, login) {
  const $ctrl = this;

  function resetValues() {
    $ctrl.favorites = undefined;
  }

  $ctrl.toggleFavorites = function() {

    if (!login.isLoggedIn()) {
      resetValues();
      return;
    }
    const params = {
      isAddFlag: !$ctrl.isFavorite,
      chordObj: {
        chordKey: $ctrl.chord.chordKey,
        artist: $ctrl.chord.artist,
        title: $ctrl.chord.title,
      },
      userKey: login.getUser().userKey,
    };
    user.addRemoveFavorites(params)
    .then(function() {
      let message;
      $ctrl.isFavorite = !$ctrl.isFavorite;
      if ($ctrl.isFavorite) {
        message = 'favorites.ADDED_MESSAGE';
      }
      else {
        message = 'favorites.REMOVED_MESSAGE';
      }
      Toast.showToastByTranslation(message);
    });

  };

  function checkIsFavorite() {
    user.isChordFavorite(login.getUser().userKey, $ctrl.chord.$id || $ctrl.chord.chordKey)
    .then(function(isFavorite) {
      $ctrl.isFavorite = !!isFavorite;
    });
  }
  function checkForChord() {
    if (!$ctrl.chord) {
      $scope.$watch(() => $ctrl.chord, function(newValue) {
      if (!!newValue) {
        newValue.chordKey = newValue.chordKey || newValue.$id;
        $ctrl.chord = newValue;
        checkIsFavorite();
      }
    });
    }
    else {
      if ($ctrl.isFavorite === undefined) {
        checkIsFavorite();
      }
    }
  }

  if (!login.isLoggedIn()) {
    $scope.$on('plyUserLoggedIn', checkForChord);
  }
  else {
    checkForChord();
  }

  $scope.$on('plyUserLoggedOut', resetValues);
  resetValues();
}

export default PlyfavoritebtnCtrl;
