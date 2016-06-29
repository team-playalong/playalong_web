(function (window, document) {
    'use strict';
    angular.module('playalongWebApp')
        .component('chordResult', {
        template: "\n\t  \t<md-list-item class=\"md-2-line clickable\">\n\t\t\t\t<img ng-src=\"{{$ctrl.chord.imagePath}}\" class=\"md-avatar\" ng-if=\"$ctrl.chord.imagePath\" />\n\t\t\t\t<div class=\"md-list-item-text\" ng-click=\"$ctrl.redirect($ctrl.chord)\">\n\t\t\t\t  <h3 ng-bind=\"$ctrl.chord.artist\"></h3>\n\t\t\t\t  <p ng-bind=\"$ctrl.chord.title\"></p>\n\t\t\t\t  <p translate=\"home.HIT_COUNT\" translate-values=\"{hitCount: $ctrl.chord.hitCount}\"></p>\n\t\t\t\t  <star-rating class=\"non-clickable\" ng-if=\"$ctrl.chord.rating\" ng-model=\"$ctrl.chord.rating\" readonly=\"true\"></star-rating>\n          <md-input-container ng-if=\"$ctrl.isShowRank()\">\n            Rank\n            <md-select\n              class=\"ply-search-form-select\"\n              placeholder=\"...\"\n              ng-model=\"$ctrl.chord.rank\"\n              ng-change=\"\">\n              <md-option ng-repeat=\"rank in $ctrl.availableRanks | orderBy: 'rank'\"  value=\"{{rank}}\">\n                {{rank}}\n              </md-option>\n            </md-select>\n          </md-input-container>\n          <md-button ng-disabled=\"!$ctrl.chord.rank\" class=\"md-raised\" type=\"submit\" ng-click=\"$ctrl.rankChangeHandler($ctrl.chord)\"\n            aria-label=\"Go\"\n            translate=\".SEARCH_BOTTON\"></md-button>\n\t\t\t\t</div>\n\t\t\t\t<md-divider ></md-divider>\n\t\t\t</md-list-item>\n\t  ",
        bindings: {
            chord: '=',
            availableRanks: '<',
            rankChangeHandler: '<',
        },
        controller: ChordResult,
    });
    ChordResult.$inject = ['$rootScope'];
    function ChordResult($rootScope) {
        var _this = this;
        this.isShowRank = function () { return _this.availableRanks && _this.availableRanks.length; };
        this.redirect = function (chord) {
            if (!_this.isShowRank()) {
                $rootScope.goToChordPage(chord);
            }
        };
    }
})(window, document);
//# sourceMappingURL=chord-result.component.js.map