(function () {
    'use strict';
    angular.module('playalongWebApp')
        .controller('TopchordsCtrl', TopchordsCtrl);
    TopchordsCtrl.$inject = ['chords', '$rootScope', '$translate'];
    function TopchordsCtrl(chords, $rootScope, $translate) {
        var vm = this;
        $translate(['topChords.PAGE_TITLE',
            'home.PAGE_TITLE',
            'topChords.SINGLE_HIT',
            'topChords.MANY_HITS'])
            .then(function (translations) {
            $rootScope.currPage = 'topChords.PAGE_TITLE';
            vm.setHitCountMessage = function (hitCount) {
                if (!hitCount) {
                    return null;
                }
                else if (hitCount === 1) {
                    return translations['topChords.SINGLE_HIT'];
                }
                else {
                    var tmp = translations['topChords.MANY_HITS'];
                    return tmp.replace('{hitCount}', hitCount);
                }
            };
        });
        vm.defaultTopLimit = 50;
        vm.getTopChords = function (limitTo) {
            $rootScope.startSpin('startTopChordsSpinner');
            limitTo = limitTo || vm.defaultTopLimit;
            chords.getTopChords(limitTo)
                .then(function (data) {
                vm.topChords = data;
                $rootScope.stopSpin('stopTopChordsSpinner');
            })
                .catch(function (error) {
                $rootScope.stopSpin('stopTopChordsSpinner');
            });
        };
        //Race condition with spinner directive
        setTimeout(function () {
            vm.getTopChords();
        }, 20);
    }
})();
//# sourceMappingURL=topchords.js.map