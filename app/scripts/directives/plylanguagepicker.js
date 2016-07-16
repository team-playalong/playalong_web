(function () {
    'use strict';
    angular.module('playalongWebApp')
        .directive('plyLanguagePicker', function () {
        return {
            template: "\n\t    <md-button class=\"md-mini ply-flex\" \n\t      ng-click=\"vm.showLanguageModal($event)\">\n\t      <md-tooltip md-direction=\"down\">{{'toolbar.language.CHOOSE' | translate}}</md-tooltip>\n\n\t    \t<i class=\"flag-icon flag-icon-{{vm.getFlagClass()}}\"></i>\n\t    </md-button>\n    ",
            restrict: 'E',
            controller: 'PlylanguagepickerCtrl',
            controllerAs: 'vm',
            bindToController: true,
        };
    });
})();
//# sourceMappingURL=plylanguagepicker.js.map