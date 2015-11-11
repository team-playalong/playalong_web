'use strict';

/**
 * @ngdoc service
 * @name playalongWebApp.toast
 * @description
 * # toast
 * Service in the playalongWebApp.
 */
angular.module('playalongWebApp')
  .service('toast',['$mdToast','$translate', function ($mdToast,$translate) {
		var conf = {
			delay: 4000, //ms
			position: 'bottom left'
		};

  	var showSimpleToast = function(content) {
  		$mdToast.show(
  		  $mdToast.simple()
  		    .content(content)
  		    .position(conf.position)
  		    .hideDelay(conf.delay)
  		);
  	};
    
    var showToastByTranslation = function(transKey) {
      $translate([transKey])
      .then(function (translations) {
        if (translations[transKey])
        {
          showSimpleToast(translations[transKey]);  
        }
      });
    };

    return {
    	showSimpleToast: showSimpleToast,
      showToastByTranslation: showToastByTranslation
    };
  }]);
