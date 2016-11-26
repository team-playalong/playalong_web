var PlyDate = (function () {
    function PlyDate($mdToast, $translate) {
        this.$mdToast = $mdToast;
        this.$translate = $translate;
    }
    PlyDate.prototype.getAllWeekNumbers = function () {
        var allWeekNumbers = [];
        for (var i = 1; i < 55; ++i) {
            allWeekNumbers.push(i);
        }
        return allWeekNumbers;
    };
    PlyDate.prototype.getAllYears = function () {
        return [2016, 2017];
    };
    return PlyDate;
}());
PlyDate.$inject = ['$mdToast', '$translate'];
angular.module('playalongWebApp')
    .service('PlyDate', PlyDate);
//# sourceMappingURL=ply-date.service.js.map