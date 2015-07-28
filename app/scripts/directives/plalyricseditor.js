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
      scope: 1,
      link: function postLink(scope, element, attrs) {
        if (!attrs.ngModel){
          throw 'you need ngModel!';
        }

        element.on('keyup keypress blur change', function(){
          scope[attrs.ngModel] = element.html();
          scope.$apply();
        });

        function closePopup(){
          angular.element('.builder-popup').css({
            visibility: 'hidden'
          });
        }

        element.on('selectstart'  , function () {
          $(document).one('mouseup', function(e) {
            var sel = this.getSelection();
            if (sel.toString().length) {
              var range = sel.getRangeAt(0);
              if (range.startContainer !== range.endContainer){
                closePopup();
                return;
              }

              var popupElem = angular.element('.builder-popup');

              console.log();

              popupElem.css({
                visibility: 'visible',
                top: (e.clientY - 60) + 'px',
                left: (e.clientX - (popupElem.width() / 2) + 5) + 'px'
              }).focus();

              scope.addChord = function(c){
                var newElem = document.createElement('span');
                newElem.className = 'chord chord-' + c;

                range.surroundContents(newElem);
                closePopup();
              };
            } else {
              closePopup();
            }
          });
        });

        element.focus();
      }
    };
  });
