(function (window, document) {
    'use strict';
    angular.module('playalongWebApp')
        .component('chordResult', {
        template: "\n\t  \t<md-list-item class=\"md-2-line clickable\">\n\t\t\t\t<img ng-src=\"{{$ctrl.chord.imagePath}}\" class=\"md-avatar\" ng-if=\"$ctrl.chord.imagePath\" />\n\t\t\t\t<div class=\"md-list-item-text\" ng-click=\"$ctrl.redirect($ctrl.chord)\">\n\t\t\t\t  <h3 ng-bind=\"$ctrl.chord.artist\"></h3>\n\t\t\t\t  <p ng-bind=\"$ctrl.chord.title\"></p>\n\t\t\t\t  <p translate=\"home.HIT_COUNT\" translate-values=\"{hitCount: $ctrl.chord.hitCount}\"></p>\n\t\t\t\t  <star-rating class=\"non-clickable\" ng-if=\"$ctrl.chord.rating\" ng-model=\"$ctrl.chord.rating\" readonly=\"true\"></star-rating>\n          <md-input-container ng-if=\"$ctrl.isShowRank>\n            Rank\n            <md-select class=\"ply-search-form-select\" placeholder=\"...\" ng-model=\"$ctrl.chord.rank\">\n              <md-option ng-repeat=\"rank in $ctrl.availableRanks\" value=\"{{rank}}\">\n                {{rank}}\n              </md-option>\n            </md-select>\n          </md-input-container>\n\t\t\t\t</div>\n\t\t\t\t<md-divider ></md-divider>\n\t\t\t</md-list-item>\n\t  ",
        bindings: {
            chord: '=',
            isShowRank: '<',
            availableRanks: '<',
        },
        controller: ChordResult,
    });
    ChordResult.$inject = ['$rootScope'];
    function ChordResult($rootScope) {
        var _this = this;
        var vm = this;
        vm.redirect = function (chord) {
            if (!_this.isShowRank) {
                $rootScope.goToChordPage(chord);
            }
        };
    }
})(window, document);
//# sourceMappingURL=chord-result.component.js.map