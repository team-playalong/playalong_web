'use strict';

/**
 * @ngdoc directive
 * @name playalongWebApp.directive:languagePicker
 * @description
 * # languagePicker
 */
angular.module('playalongWebApp')
  .directive('languagePicker',['$translate', function ($translate) {
    return {
      templateUrl: 'views/templates/language-picker.html',
      restrict: 'E',
      link: function postLink(scope) {
    		var availableLocales = ['en','he'];

    		var loc = $translate.proposedLanguage();
    		scope.selectedLanguage = loc === 'he' ? 'hebrew' : 'english';
    	  scope.changeLocale = function(locale) {
    	  	if (locale && availableLocales.indexOf(locale) !== -1)
    	  	{
    	  		$translate.use(locale);
    	  	}
    	  };
      }
    };
  }]);
