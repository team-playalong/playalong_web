'use strict';

/**
 * @ngdoc directive
 * @name playalongWebApp.directive:hideOnMobile
 * @description
 * # hideOnMobile
 */
angular.module('playalongWebApp')
  .directive('hideOnMobile', ['regexStore',function (regexStore) {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var mobileRegex = regexStore.getMobile();
        if(mobileRegex.test(navigator.userAgent)) {
        	element.hide();
        }
        else {
        	element.show();
        }

      }
    };
  }]);
