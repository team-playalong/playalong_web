(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name playalongWebApp.directive:autoscrollWidget
   * @description
   * # autoscrollWidget
   */
  /*jshint unused:false*/
  angular.module('playalongWebApp')
    .directive('autoscrollWidget', [function () {
      return {
        templateUrl: 'views/templates/autoscroll-widget.html',
        restrict: 'E',
        scope: {
          speed: '=',
          min: '@?',
          max: '@?',
          enabled: '@?',
        },
        //TODO - move functions to controller
        link: function postLink(scope, element, attrs) {
          scope.enabled = scope.enabled || false;
          scope.min = scope.min || 0;
          scope.max = scope.min || 5;
          scope.isMinified = false;
          scope.minMaxIcon = 'unfold_less';
          scope.levelColors = ['#F44336','#D2583B','#B06E40', '#8F8345','#6D994A','#4CAF50'];

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

            scope.speed = Math.max(scope.min,scope.speed);
            scope.speed = Math.min(scope.max,scope.speed);
          };

          scope.$watch('enabled', function() {
            if (scope.enabled && scope.enabled !== 'false')
            {
              element.css('display', 'block');
            }
            else
            {
              element.css('display', 'none');
            }
          });

        }
      };
    }]);

})();
