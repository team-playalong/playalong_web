'use strict';
/**
 * @ngdoc service
 * @name playalongWebApp.plyTooltip
 * @description
 * # plyTooltip
 * Service in the playalongWebApp.
 */
var plyTooltip = (function () {
    function plyTooltip($translate) {
        this.$translate = $translate;
    }
    plyTooltip.prototype.getHorizontalDirection = function () {
        var direction = this.$translate.use() === 'he' ? 'right' : 'left';
        return direction;
    };
    ;
    plyTooltip.prototype.setTooltip = function (elem) {
        elem = angular.element(elem);
        elem.attr('uib-tooltip', 'Test');
    };
    ;
    return plyTooltip;
}());
plyTooltip.$inject = ['$translate'];
angular.module('playalongWebApp')
    .service('plyTooltip', plyTooltip);
//# sourceMappingURL=plytooltip.js.map