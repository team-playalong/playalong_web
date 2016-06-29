(function () {
    'use strict';
    /**
     * @ngdoc service
     * @name playalongWebApp.Common
     * @description
     * # Common
     * Factory in the playalongWebApp.
     */
    angular.module('playalongWebApp')
        .factory('Common', Common);
    Common.$inject = ['RegexStore', 'login'];
    function Common(RegexStore, login) {
        function isRtlContent(content) {
            //enough to find 3 non-english characters and we're good :)
            if (!content) {
                return false;
            }
            var matching = content.match(RegexStore.get('hebrew'));
            return !!matching && matching.length >= 3;
        }
        function removeDuplicates(collection) {
            return collection.filter(function (elem, pos, arr) {
                return arr.indexOf(elem) === pos;
            });
        }
        // Public API here
        return {
            isRtlContent: isRtlContent,
            removeDuplicates: removeDuplicates,
        };
    }
})();
//# sourceMappingURL=common.js.map