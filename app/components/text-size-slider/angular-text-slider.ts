angular.module('textSizeSlider', [])
  // textSizeSlider Directive
  .directive('textSizeSlider', ['$document', function ($document) {
    return {
      restrict: 'E',
      // Inline template. For info on how to style the slider please visit: http://www.castillo.io/angular-text-slider
      template: `
        <div class="text-size-slider" layout="row" layout-align="center center"><span class="small-letter" flex="10" ng-style="{ fontSize: min + unit }">A</span><span flex> <input type="range" min="{{ min }}" max="{{ max }}" ng-model="textSize" class="slider" value="{{ value }}" /> </span><span class="big-letter" flex="10" ng-style="{ fontSize: max + unit }">A</span></div>
      `,
      // Isolated scope
      scope: {
        min: '@',
        max: '@',
        unit: '@',
        value: '@',
      },
      link(scope, element, attr) {
        // Set default text size value
        scope.textSize = scope.value;
        // Update text size value based on ngModel
        scope.$watch('textSize', function (size) {
          let elem;
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
      },
    };
  }]);
