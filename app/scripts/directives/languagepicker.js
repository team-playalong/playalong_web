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
    		scope.languages = [
    			{
    				locale: 'he',
    				title: 'Hebrew'
    			}
    		];
    		

    		var loc = $translate.proposedLanguage();
    		scope.selectedLanguage = loc === 'he' ? scope.languages[0] : scope.languages[1];
    	  scope.changeLocale = function(locale) {
    	  	if (locale && availableLocales.indexOf(locale) !== -1)
    	  	{
    	  		$translate.use(locale);
    	  	}
    	  };
      }
    };
  }]);
