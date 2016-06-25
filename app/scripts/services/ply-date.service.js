(function () {
    'use strict';
    angular.module('playalongWebApp')
        .service('PlyDate', PlyDate);
    PlyDate.$inject = [];
    function PlyDate($mdToast, $translate) {
        function getAllWeekNumbers() {
            var allWeekNumbers = [];
            for (var i = 1; i < 55; ++i) {
                allWeekNumbers.push(i);
            }
            return allWeekNumbers;
        }
        function getAllYears() {
            return [2016, 2017];
        }
        return {
            getAllWeekNumbers: getAllWeekNumbers,
            getAllYears: getAllYears,
        };
    }
})();
//# sourceMappingURL=ply-date.service.js.map