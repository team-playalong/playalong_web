'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:AutoscrollCtrl
 * @description
 * # AutoscrollCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('AutoscrollCtrl', ['$scope','$interval','$window','$state',
  	function ($scope,$interval,$window,$state) {
		var newInterval;
  	$scope.config = {
  		bottomSpeed: 1,
  		topSpeed: 2,
  		baseInterval: 80,
  		maxSpeed: 5,
  		minSpeed: 0
  	};
  	//Fallback and make sure its between min-max
  	$scope.speed = Math.min($scope.speed || $scope.config.minSpeed,$scope.config.maxSpeed);
    $scope.stateName = $state.current.name;
  	$scope.normalizeSpeed = function() {
  		var base = $scope.config.bottomSpeed;
  		var offset = ($scope.speed - base)/($scope.config.maxSpeed - $scope.config.minSpeed);
  		return base + offset;
  	};


  	$scope.updateInterval = function() {
  		var normalizedSpeed = $scope.normalizeSpeed();
  		if ($scope.plyInterval)
  		{
  			$interval.cancel($scope.plyInterval);
  		}
  		newInterval = $scope.config.baseInterval * (1/normalizedSpeed);
  		$scope.plyInterval = $interval(function() {
        if ($scope.speed > 0 && $state.current.name === $scope.stateName)
        {
          $window.scrollBy(0,1);
        }
        else {
          $interval.cancel($scope.plyInterval);   
        }
		  },newInterval,0/*infinite*/, false /*no apply*/);
  	};

}]);
