'use strict';

/**
 * @ngdoc directive
 * @name playalongWebApp.directive:autoscrollWidget
 * @description
 * # autoscrollWidget
 */
/*jshint unused:false*/
angular.module('playalongWebApp')
  .directive('autoscrollWidget', function () {
    return {
      templateUrl: 'views/templates/autoscroll-widget.html',
      restrict: 'E',
      scope: {
        speed: '@?',
        min: '@?',
        max: '@?'
      },
      link: function postLink(scope, element, attrs) {
        scope.min = scope.min || 0;
        scope.max = scope.min || 5;

      }
    };
  });
