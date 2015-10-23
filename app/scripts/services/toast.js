'use strict';

/**
 * @ngdoc service
 * @name playalongWebApp.toast
 * @description
 * # toast
 * Service in the playalongWebApp.
 */
angular.module('playalongWebApp')
  .service('toast',['$mdToast', function ($mdToast) {
		var conf = {
			delay: 3000, //ms
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

    return {
    	showSimpleToast: showSimpleToast
    };
  }]);
