'use strict';

/**
 * @ngdoc directive
 * @name playalongWebApp.directive:plyDisqus
 * @description
 * # plyDisqus
 */
angular.module('playalongWebApp')
  .directive('plyDisqus', function () {
    return {
      templateUrl: 'views/templates/disqus.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs: any) {
		    /* jshint unused:false */
		    let disqus_config = function () {
          // Replace PAGE_URL with your page's canonical URL variable
	        this.page.url = attrs.plyDisqusUrl;
          // Replace PAGE_IDENTIFIER with your page's unique identifier variable
	        this.page.identifier = attrs.plyDisqusId;
		    };

		    (function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
		        let d = document;
            let s = d.createElement('script');

		        s.src = '//playalong.disqus.com/embed.js';  // IMPORTANT: Replace EXAMPLE with your forum shortname!

		        s.setAttribute('data-timestamp', Date.now() + '');
		        (d.head || d.body).appendChild(s);
		    })();
      },
    };
  });
