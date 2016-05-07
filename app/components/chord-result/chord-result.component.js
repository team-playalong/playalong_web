(function (window, document) {
    'use strict';
    angular.module('playalongWebApp')
        .component('chordResult', {
        template: "\n\t  \t<md-list-item class=\"md-2-line clickable\">\n\t\t\t\t<img ng-src=\"{{$ctrl.chord.imagePath}}\" class=\"md-avatar\" ng-if=\"$ctrl.chord.imagePath\" />\n\t\t\t\t<div class=\"md-list-item-text\" ng-click=\"$ctrl.redirect($ctrl.chord)\"> \n\t\t\t\t  <h3 ng-bind=\"$ctrl.chord.artist\"></h3>\n\t\t\t\t  <p ng-bind=\"$ctrl.chord.title\"></p>\n\t\t\t\t  <p translate=\"home.HIT_COUNT\" translate-values=\"{hitCount: $ctrl.chord.hitCount}\"></p>\n\t\t\t\t  <star-rating class=\"non-clickable\" ng-if=\"$ctrl.chord.rating\" ng-model=\"$ctrl.chord.rating\" readonly=\"true\"></star-rating>\n\t\t\t\t</div>\n\t\t\t\t<md-divider ></md-divider>\n\t\t\t</md-list-item>\n\t  ",
        bindings: {
            chord: '<'
        },
        controller: ChordResult
    });
    ChordResult.$inject = ['$rootScope'];
    function ChordResult($rootScope) {
        var vm = this;
        vm.redirect = function (chord) {
            $rootScope.goToChordPage(chord);
        };
    }
})(window, document);
//# sourceMappingURL=chord-result.component.js.map