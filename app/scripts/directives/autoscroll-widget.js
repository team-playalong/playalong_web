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
        speed: '=',
        min: '@?',
        max: '@?',
        enabled: '@?'
      },
      link: function postLink(scope, element, attrs) {
        scope.enabled = scope.enabled || false;
        scope.min = scope.min || 0;
        scope.max = scope.min || 5;
        scope.isMinified = false;
        scope.minMaxIcon = 'unfold_less';

        scope.toggleMinMax = function() {
          scope.isMinified = !scope.isMinified;

          if (scope.isMinified) {
            scope.minMaxIcon = 'unfold_more';            
          }
          else {
            scope.minMaxIcon = 'unfold_less';
          }
        };

        scope.changeSpeed = function(amount) {
          amount = amount || 0;
          scope.speed += amount;
        };

        scope.$watch('enabled', function() {
          if (scope.enabled && scope.enabled !== 'false')
          {
            element.show();
          }
          else
          {
            element.hide();
          }
        });

      }
    };
  });
