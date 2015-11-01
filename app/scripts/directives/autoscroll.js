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
  			scope.$watch('speed', function() {
  					scope.updateInterval();
  			});
      }
    };
  }]);
 /*jshint unused:true*/
