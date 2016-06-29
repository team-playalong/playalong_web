(function() {
  'use strict';
  plySpinner.$inject = ['$interval'];
  function plySpinner($interval) {
    const DEFAULT_TIMEOUT = 10000;

    return {
      template: '<md-progress-circular class="md-accent md-hue-1 ply-spinner" md-mode="{{modes[2]}}" md-diameter="60"></md-progress-circular>',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {


       element.css('display', 'none');
       scope.$on(attrs.triggerStartEvent, () => {
         element.css('display', 'block');
         setTimeout(() => element.css('display', 'none'), DEFAULT_TIMEOUT);
       });

       scope.$on(attrs.triggerStopEvent, () => {
         element.css('display', 'none');
       });

       let j = 0;
       let counter = 0;
       scope.modes = [ ];
       scope.activated = true;
       scope.determinateValue = 30;


       /**
        * Turn off or on the 5 themed loaders
        */
       scope.toggleActivation = function() {
           if ( !scope.activated ) {scope.modes = [ ];}
           if (  scope.activated ) {j = counter = 0;}
       };
       // Iterate every 100ms, non-stop
       $interval(function() {
         // Increment the Determinate loader
         scope.determinateValue += 1;
         if (scope.determinateValue > 100) {
           scope.determinateValue = 30;
         }
         // Incrementally start animation the five (5) Indeterminate,
         // themed progress circular bars
         if ( (j < 5) && !scope.modes[j] && scope.activated ) {
           scope.modes[j] = 'indeterminate';
         }
         if ( counter++ % 4 === 0 ) {j++;}
       }, 100, 0, true);
      }
      };
   }


  angular.module('playalongWebApp')
    .directive('plySpinner', plySpinner);
})();
