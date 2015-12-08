'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:PlyfavoritebtnCtrl
 * @description
 * # PlyfavoritebtnCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('PlyfavoritebtnCtrl',['$scope','user','login','toast',
   function ($scope,user,login,toast) {
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
		  	chordObj: $scope.chord,
		  	userKey: login.getUser().userKey
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
  }]);
