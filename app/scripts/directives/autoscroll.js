'use strict';

/**
 * @ngdoc directive
 * @name playalongWebApp.directive:autoscroll
 * @description
 * # autoscroll
 */
 /*jshint unused:false*/
angular.module('playalongWebApp')
  .directive('autoscroll', ['$window','$interval',
  	function ($window,$interval) {
    return {
    	scope: {
    		speed: '@?'
    	},
      restrict: 'A',
      controller: 'AutoscrollCtrl',
      link: function (scope, element, attrs) {
    //   	var plyScroll;
				// var newInterval;      	
				// var scrollAmount;
    //   	var config = {
    //   		bottomSpeed: 1,
    //   		topSpeed: 2,
    //   		baseInterval: 50
    //   	};

    //   	scope.speed = scope.speed || 1;
    //   	newInterval = config.baseInterval * (1/scope.speed);
    //   	scrollAmount =  config.baseSpeed * scope.speed;

    //     plyScroll = $interval(function() {
    //     	$window.scrollBy(0,scrollAmount);
    //     },newInterval,0/*infinite*/, false /*no apply*/);
  			scope.$watch('speed', function() {
  					scope.updateInterval();
  			});
      }
    };
  }]);
 /*jshint unused:true*/