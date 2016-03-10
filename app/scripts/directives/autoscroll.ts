(function() {
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
        bindToController: true,
        restrict: 'A',
        scope:  {
          speed: '@?'
        },
        controller: 'AutoscrollCtrl',
        controllerAs: 'vm',
        link: function (scope, element, attrs, $ctrl) {
          scope.$watch(function() {
            return $ctrl.speed;
          },function() {
            $ctrl.updateInterval();
          });
        }
      };
    }]);
   /*jshint unused:true*/
  
})();
