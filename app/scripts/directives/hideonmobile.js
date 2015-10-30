'use strict';

/**
 * @ngdoc directive
 * @name playalongWebApp.directive:hideOnMobile
 * @description
 * # hideOnMobile
 */
angular.module('playalongWebApp')
  .directive('hideOnMobile', ['RegexStore',function (RegexStore) {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var mobileRegex = RegexStore.get('mobile');
        if(mobileRegex.test(navigator.userAgent)) {
        	element.hide();
        }
        else {
        	element.show();
        }

      }
    };
  }]);
