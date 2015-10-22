'use strict';

/**
 * @ngdoc directive
 * @name playalongWebApp.directive:plaLyricsEditor
 * @description
 * # plaLyricsEditor
 */
angular.module('playalongWebApp')
  .directive('plaEditor', ['$interval',function ($interval) {
    return {
      restrict: 'A',
      scope: 1,
      link: function postLink(scope, element) {
        var hebrewRegex = new RegExp(/[\u0590-\u05e8\u05e9-\u05ff]/g);


        element.html('<div class="rowWrapper">&nbsp;</div>');
        element
          .on('keydown', function(e){
            if (e.keyCode === 9) { //  tab key
              e.preventDefault();  // this will prevent us from tabbing out of the editor

              // now insert four non-breaking spaces for the tab key
              var doc = element[0].ownerDocument.defaultView;
              var sel = doc.getSelection();
              var range = sel.getRangeAt(0);

              var tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
              range.insertNode(tabNode);

              range.setStartAfter(tabNode);
              range.setEndAfter(tabNode);
              sel.removeAllRanges();
              sel.addRange(range);
            }
          });
          
          $interval(function() {
            var match = element[0].innerHTML.match(hebrewRegex);
            if (match && match.length)
            {
              angular.element('.rowWrapper').css('direction','rtl');
            }
            else {
              angular.element('.rowWrapper').css('direction','ltr');
            }
          },2000);
          
          // .on('paste',function(e) {
          //   e.preventDefault();

          //   var text = (e.originalEvent || e).clipboardData.getData('text/html') || prompt('Paste something..');
          //   var $result = $('<div></div>').append($(text));

          //   $(this).html($result.html());

          //   $.each($(this).find("*"), function(idx, val) {

          //     var $item = $(val);
          //     if ($item.length > 0){
          //       $item.removeAttr('style').removeClass();
          //     }
          //   });

          //   $(this).children('style').remove();
          //   $(this).children('meta').remove();
          //   $(this).children('link').remove();
          // });

        element.focus();
      }
    };
  }]);
