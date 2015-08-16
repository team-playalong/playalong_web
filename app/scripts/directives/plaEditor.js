'use strict';

/**
 * @ngdoc directive
 * @name playalongWebApp.directive:plaLyricsEditor
 * @description
 * # plaLyricsEditor
 */
angular.module('playalongWebApp')
  .directive('plaEditor', function () {
    return {
      restrict: 'A',
      scope: 1,
      link: function postLink(scope, element, attrs) {
        element
          .on('keyup keypress blur', function(){
            scope.scanForChords(element.html());
          });

        element.focus();
      }
    };
  });
