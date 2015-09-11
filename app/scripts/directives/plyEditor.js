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
      link: function postLink(scope, element) {
        element
          .on('keyup keypress blur', function(){
            scope.scanForChords(element.html());
          });
          // .on('paste',function(e) {
          //   e.preventDefault();

          //   var text = (e.originalEvent || e).clipboardData.getData('text/html') || prompt('Paste something..');
          //   var $result = $('<div></div>').append($(text));

          //   $(this).html($result.html());

          //   $.each($(this).find("*"), function(idx, val) {

          //     var $item = $(val);
          //     if ($item.length > 0){
          //       var saveStyle = {
          //         'font-weight': $item.css('font-weight'),
          //         'font-style': $item.css('font-style')
          //       };
          //       $item.removeAttr('style')
          //         .removeClass()
          //         .css(saveStyle);
          //     }
          //   });

          //   // remove unnecesary tags (if paste from word)
          //   $(this).children('style').remove();
          //   $(this).children('meta').remove();
          //   $(this).children('link').remove();
          // });

        element.focus();
      }
    };
  });
