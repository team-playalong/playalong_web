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

        element.on('selectstart'  , function () {
          $(document).one('mouseup', function() {
            var sel = this.getSelection();
            if (sel.toString().length) {
              var range = sel.getRangeAt(0);

              // if the start of the selection and the end arent in the same object return, too big selection
              if (range.startContainer !== range.endContainer) return;

              $(range.commonAncestorContainer).darkTooltip({
                animation:'flipIn',
                gravity:'west',
                confirm:true,
                theme:'light'
              });


              var newElem = document.createElement('span');
              newElem.className = 'cord cord-A';

              range.surroundContents(newElem);
            }
          });
        });

        element.focus();
      }
    };
  });
