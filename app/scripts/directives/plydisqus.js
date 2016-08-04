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
        link: function postLink(scope, element, attrs) {
            /**
                 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
                 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
                 */
            /*jshint unused:false*/
            var disqus_config = function () {
                this.page.url = attrs.plyDisqusUrl; // Replace PAGE_URL with your page's canonical URL variable
                this.page.identifier = attrs.plyDisqusId; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
            (function () {
                var d = document, s = d.createElement('script');
                s.src = '//playalong.disqus.com/embed.js'; // IMPORTANT: Replace EXAMPLE with your forum shortname!
                s.setAttribute('data-timestamp', Date.now() + '');
                (d.head || d.body).appendChild(s);
            })();
        }
    };
});
//# sourceMappingURL=plydisqus.js.map