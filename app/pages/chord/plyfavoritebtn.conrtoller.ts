PlyfavoritebtnCtrl.$inject = ['$scope', 'user', 'login', 'Toast'];
function PlyfavoritebtnCtrl($scope, user, login, toast) {
  function resetValues() {
    $scope.favorites = undefined;
  };

  $scope.toggleFavorites = function() {

    if (!login.isLoggedIn()) {
      resetValues();
      return;
    }
    const params = {
      isAddFlag: !$scope.isFavorite,
      chordObj: {
        chordKey: $scope.chord.chordKey,
        artist: $scope.chord.artist,
        title: $scope.chord.title,
      },
      userKey: login.getUser().userKey,
    };
    user.addRemoveFavorites(params)
    .then(function() {
      let message;
      $scope.isFavorite = !$scope.isFavorite;
      if ($scope.isFavorite) {
        message = 'favorites.ADDED_MESSAGE';
      }
      else {
        message = 'favorites.REMOVED_MESSAGE';
      }
      toast.showToastByTranslation(message);
    });

  };

  function checkIsFavorite() {
    user.isChordFavorite(login.getUser().userKey, $scope.chord.$id || $scope.chord.chordKey)
    .then(function(isFavorite) {
      $scope.isFavorite = !!isFavorite;
    });
  };
  function checkForChord() {
    if (!$scope.chord) {
      $scope.$watch('chord', function(newValue) {
      if (!!newValue) {
        newValue.chordKey = newValue.chordKey || newValue.$id;
        $scope.chord = newValue;
        checkIsFavorite();
      }
    });
    }
    else {
      if ($scope.isFavorite === undefined) {
        checkIsFavorite();
      }
    }
  };

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
