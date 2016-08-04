'use strict';
/**
 * @ngdoc service
 * @name playalongWebApp.plyTooltip
 * @description
 * # plyTooltip
 * Service in the playalongWebApp.
 */
angular.module('playalongWebApp')
    .service('plyTooltip', ['$translate',
    function ($translate) {
        var getHorizontalDirection = function () {
            var direction = $translate.use() === 'he' ? 'right' : 'left';
            return direction;
        };
        var setTooltip = function (elem) {
            elem = angular.element(elem);
            elem.attr('uib-tooltip', 'Test');
        };
        return {
            getHorizontalDirection: getHorizontalDirection,
            setTooltip: setTooltip
        };
    }]);
//# sourceMappingURL=plytooltip.js.map