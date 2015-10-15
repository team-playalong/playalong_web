'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:TopchordsCtrl
 * @description
 * Getting the top chords - mostly by hit count
 * # TopchordsCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('TopchordsCtrl', ['$scope','chords','$rootScope',
function ($scope,chords, $rootScope) {
	$rootScope.currPage = 'Top 10 Chords';
	$scope.defaultTopLimit = 10;
	$scope.getTopChords = function(limitTo) {
		limitTo = limitTo || $scope.defaultTopLimit;

		chords.getTopChords(limitTo)
		.then(function(data) {
			$scope.topChords = data;
		});

	};

	$scope.getTopChords();
}]);
