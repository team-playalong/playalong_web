/**
 * AngularTextSlider
 * @version v0.0.1
 * @author Alex Castillo
 * @link http://door3.github.io/angular-text-slider
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function (angular) {
    'use strict';
    /**
     * textSizeSlider Module
     * Contains: directive
     **/
    angular.module('textSizeSlider', [])
        .directive('textSizeSlider', ['$document', function ($document) {
            return {
                restrict: 'E',
                // Inline template. For info on how to style the slider please visit: http://www.castillo.io/angular-text-slider
                template: '<div class="text-size-slider" layout="row" layout-align="center center"><span class="small-letter" flex="10" ng-style="{ fontSize: min + unit }">A</span><span flex> <input type="range" min="{{ min }}" max="{{ max }}" ng-model="textSize" class="slider" value="{{ value }}" /> </span><span class="big-letter" flex="10" ng-style="{ fontSize: max + unit }">A</span></div>',
                // Isolated scope
                scope: {
                    min: '@',
                    max: '@',
                    unit: '@',
                    value: '@'
                },
                link: function (scope, element, attr) {
                    // Set default text size value
                    scope.textSize = scope.value;
                    // Update text size value based on ngModel
                    scope.$watch('textSize', function (size) {
                        var elem;
                        if (attr.elementClass) {
                            elem = angular.element(document.querySelector('.' + attr.elementClass));
                        }
                        else {
                            elem = angular.element($document[0].body);
                        }
                        if (elem) {
                            elem.css('fontSize', size + scope.unit);
                        }
                    });
                }
            };
        }]);
})(angular);
//# sourceMappingURL=angular-text-slider.js.map