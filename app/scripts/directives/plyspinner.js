'use strict';
/**
 * @ngdoc directive
 * @name playalongWebApp.directive:plySpinner
 * @description
 * # plySpinner
 */
angular.module('playalongWebApp')
  .directive('plySpinner', ['$interval',function($interval) {
    return {
      template: '<md-progress-circular class="md-accent md-hue-1 ply-spinner" md-mode="{{modes[2]}}" md-diameter="60"></md-progress-circular>',
      restrict: 'EA',
      link: function postLink(scope, element,attrs) {
    		element.hide();
        scope.$on(attrs.triggerStartEvent, function(){
        	element.show();
        });

        scope.$on(attrs.triggerStopEvent, function(){
        	element.hide();
        });

        var j= 0, counter = 0;
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
  }]);
