/**
 * @ngdoc service
 * @name playalongWebApp.toast
 * @description
 * # toast
 * Service in the playalongWebApp.
 */
var toast = (function () {
    function toast($mdToast, $translate) {
        this.$mdToast = $mdToast;
        this.$translate = $translate;
        this.conf = {
            delay: 4000,
            position: 'bottom left'
        };
    }
    toast.prototype.showSimpleToast = function (content, delayMs) {
        if (delayMs === void 0) { delayMs = this.conf.delay; }
        this.$mdToast.show(this.$mdToast.simple()
            .content(content)
            .position(this.conf.position)
            .hideDelay(delayMs));
    };
    toast.prototype.showToastByTranslation = function (transKey) {
        var _this = this;
        this.$translate([transKey])
            .then(function (translations) {
            if (translations[transKey]) {
                _this.showSimpleToast(translations[transKey]);
            }
        });
    };
    return toast;
}());
toast.$inject = ['$mdToast', '$translate'];
angular.module('playalongWebApp')
    .service('toast', toast);
//# sourceMappingURL=toast.js.map