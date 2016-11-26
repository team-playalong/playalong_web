/**
 * @ngdoc service
 * @name playalongWebApp.Common
 * @description
 * # Common
 * Factory in the playalongWebApp.
 */
var Common = (function () {
    function Common(RegexStore) {
        this.RegexStore = RegexStore;
    }
    Common.prototype.isRtlContent = function (content) {
        //enough to find 3 non-english characters and we're good :)
        if (!content) {
            return false;
        }
        var matching = content.match(this.RegexStore.get('hebrew'));
        return !!matching && matching.length >= 3;
    };
    Common.prototype.removeDuplicates = function (collection) {
        return collection.filter(function (elem, pos, arr) {
            return arr.indexOf(elem) === pos;
        });
    };
    return Common;
}());
Common.$inject = ['RegexStore'];
angular.module('playalongWebApp')
    .service('Common', Common);
//# sourceMappingURL=common.js.map