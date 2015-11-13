'use strict';

/**
 * @ngdoc service
 * @name playalongWebApp.Common
 * @description
 * # Common
 * Factory in the playalongWebApp.
 */
angular.module('playalongWebApp')
  .factory('Common', ['RegexStore', function (RegexStore) {
    

    var isRtlContent = function(content) {
      //enough to find 3 non-english characters and we're good :)
      if (!content) {return false;}
      var matching = content.match(RegexStore.get('hebrew'));
      return !!matching && matching.length >= 3;
    };

    var getParameterByName = function(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    // Public API here
    return {
      isRtlContent: isRtlContent,
      getParameterByName: getParameterByName
    };
  }]);
