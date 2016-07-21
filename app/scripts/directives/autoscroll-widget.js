(function () {
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
                template: "\n          <div  class=\"well ply-autoscroll-widget no-padding\" \n                jqyoui-draggable=\"{animate:true}\" \n                data-drag=\"true\" \n                ng-class=\"{minified: isMinified}\"\n                translate-namespace=\"autoScroll\">\n              <div class=\"ply-autoscroll-widget-minimize\">\n                <md-button class=\"md-icon-button\" aria-label=\"unfold_less\" hide-gt-sm>\n                  <ng-md-icon ng-click=\"toggleMinMax()\" icon=\"{{minMaxIcon}}\" size=\"15\"></ng-md-icon>\n                </md-button>\n              </div>\n              <div   layout=\"row\" layout-align=\"center center\" layout-wrap ng-if=\"!isMinified\">\n                <md-button class=\"md-icon-button\" aria-label=\"Remove\" flex-gt-sm=\"15\" flex-sm=\"100\">\n                  <ng-md-icon ng-click=\"changeSpeed(-1)\" icon=\"remove\" size=\"30\"></ng-md-icon>\n                  <md-tooltip md-direction=\"top\">{{'autoscroll.SLOWER_MESSAGE' | translate}}</md-tooltip>\n                </md-button>\n                <justgage level-colors=\"{{levelColors}}\" class=\"ply-autoscroll-widget-gauge\" title=\"{{'autoscroll.TITLE' | translate}}\" value=\"{{speed}}\"\n                          min=\"{{min}}\" max=\"{{max}}\" flex-gt-sm=\"50\" flex-sm=\"100\">\n                </justgage>    \n                <md-button class=\"md-icon-button\"  aria-label=\"Add\" flex-gt-sm=\"15\" flex-sm=\"100\">\n                <md-tooltip md-direction=\"top\" >{{'autoscroll.QUICKER_MESSAGE' | translate}}</md-tooltip>\n                  <ng-md-icon icon=\"add\" ng-click=\"changeSpeed(1)\" size=\"30\"></ng-md-icon>\n                </md-button>\n              </div>\n              \n          </div>\n        ",
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
                    scope.minMaxIcon = 'keyboard_arrow_right';
                    scope.levelColors = ['#F44336', '#D2583B', '#B06E40', '#8F8345', '#6D994A', '#4CAF50'];
                    scope.toggleMinMax = function () {
                        scope.isMinified = !scope.isMinified;
                        if (scope.isMinified) {
                            scope.minMaxIcon = 'keyboard_arrow_left';
                        }
                        else {
                            scope.minMaxIcon = 'keyboard_arrow_right';
                        }
                    };
                    scope.changeSpeed = function (amount) {
                        amount = amount || 0;
                        scope.speed += amount;
                        scope.speed = Math.max(scope.min, scope.speed);
                        scope.speed = Math.min(scope.max, scope.speed);
                    };
                    scope.$watch('enabled', function () {
                        if (scope.enabled && scope.enabled !== 'false') {
                            element.css('display', 'block');
                        }
                        else {
                            element.css('display', 'none');
                        }
                    });
                },
            };
        }]);
})();
//# sourceMappingURL=autoscroll-widget.js.map