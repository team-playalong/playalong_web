'use strict';

/**
 * @ngdoc service
 * @name playalongWebApp.regexStore
 * @description
 * # regexStore
 * Service in the playalongWebApp.
 */
angular.module('playalongWebApp')
  .service('RegexStore', function () {
    var regex = {
    	mobile: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
    	hebrew: /[\u0590-\u05e8\u05e9-\u05ff]/g
    };
    
    return {
    	getMobile: function() {return regex.mobile;},
    	getHebrew: function() {return regex.hebrew;}
    };
  });
