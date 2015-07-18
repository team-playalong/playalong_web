'use strict';

/**
 * @ngdoc directive
 * @name playalongWebApp.directive:plaLyricsEditor
 * @description
 * # plaLyricsEditor
 */
angular.module('playalongWebApp')
  .directive('plaLyricsEditor', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs, ngModel) {
        if (!attrs.ngModel){
          throw 'you need ngModel!';
          return;
        }

        element.on('keyup keypress blur change', function(){
          scope[attrs.ngModel] = element.html();
          scope.$apply();
        });
      }
    };
  });
