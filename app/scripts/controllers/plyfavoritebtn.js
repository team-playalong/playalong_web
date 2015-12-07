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
   	$scope.toggleFavorites = function() {
		  var params = {
		  	isAddFlag: !$scope.isFavorite,
		  	chordObj: $scope.chord,
		  	userKey: login.getUser().userKey
		  };
	    user.addRemoveFavorites(params)
	    .then(function() {
  			$scope.isFavorite = !$scope.isFavorite;
  			var message;
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
  		user.isChordFavorite(login.getUser().userKey,$scope.chord.$id)
  		.then(function(isFavorite)
  		{
				$scope.isFavorite = !!isFavorite;
  		});
  	};
  	var checkForChord = function() {
  		if (!$scope.chord)
  		{
  			$scope.$watch('chord', function(newValue) {
	    	if (!!newValue && !!newValue.chordKey)
	    	{
	    		$scope.chord = newValue;
	    		checkIsFavorite();
	    	}
	    });	
  		}
  		else {
  			checkIsFavorite();
  		}
  	};

    if (!login.isLoggedIn())
    {
    	$scope.$on('plyUserLoggedIn', checkForChord);
    }
    else {
    	checkForChord();
    }
    
  }]);
