'use strict';

/**
 * @ngdoc directive
 * @name playalongWebApp.directive:plyLanguagePicker
 * @description
 * # plyLanguagePicker
 */
angular.module('playalongWebApp')
  .directive('plyLanguagePicker', function () {
    return {
      templateUrl: 'views/templates/language-picker-button.html',
      restrict: 'E',
      controller:'PlylanguagepickerCtrl'
    };
  });
