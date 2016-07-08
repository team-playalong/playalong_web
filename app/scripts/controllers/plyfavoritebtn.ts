(function() {
  'use strict';

  angular.module('playalongWebApp')
  .controller('PlyfavoritebtnCtrl', PlyfavoritebtnCtrl);

  PlyfavoritebtnCtrl.$inject = ['$scope','user','login','toast'];
  function PlyfavoritebtnCtrl($scope,user,login,toast) {
    var resetValues = function() {
      $scope.favorites = undefined;
    };

    $scope.toggleFavorites = function() {

      if (!login.isLoggedIn()) {
        resetValues();
        return;
      }
      var params = {
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
        var message;
        $scope.isFavorite = !$scope.isFavorite;
        if ($scope.isFavorite)
        {
          message = 'favorites.ADDED_MESSAGE';
        }
        else {
          message = 'favorites.REMOVED_MESSAGE';
        }
        toast.showToastByTranslation(message);
      });

    };

    var checkIsFavorite = function() {
      user.isChordFavorite(login.getUser().userKey,$scope.chord.$id || $scope.chord.chordKey)
      .then(function(isFavorite)
      {
        $scope.isFavorite = !!isFavorite;
      });
    };
    var checkForChord = function() {
      if (!$scope.chord)
      {
        $scope.$watch('chord', function(newValue) {
        if (!!newValue)
        {
          newValue.chordKey = newValue.chordKey || newValue.$id;
          $scope.chord = newValue;
          checkIsFavorite();
        }
      });
      }
      else {
        if ($scope.isFavorite === undefined )
        {
          checkIsFavorite();
        }

      }
    };

    if (!login.isLoggedIn())
    {
      $scope.$on('plyUserLoggedIn', checkForChord);
    }
    else {
      checkForChord();
    }

    $scope.$on('plyUserLoggedOut',resetValues);
    resetValues();
  }
})();
