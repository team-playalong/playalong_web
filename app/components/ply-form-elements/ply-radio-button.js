(function () {
    angular.module('plyFormElements')
        .component('plyRadioButton', {
        template: "\n      <md-radio-button\n        ng-value=\"$crtl.plyValue\"\n        ng-disabled=\"false\">\n        {{$ctrl.plyLabel}}\n      </md-radio-button>\n    ",
        bindings: {
            plyValue: '=',
            plyLabel: '<',
        },
    })
        .component('plyRadioButtonGroup', {
        template: "\n      <md-radio-group ng-model=\"$ctrl.plyModel\" class=\"md-primary\">\n        <md-radio-button\n          ng-repeat=\"d in $ctrl.plyRadioData\"\n          ng-value=\"d.value\">\n          {{d.label | translate}}\n        </md-radio-button>\n      </md-radio-group>\n  ",
        bindings: {
            plyRadioData: '=',
            plyModel: '=',
        },
    });
})();
//# sourceMappingURL=ply-radio-button.js.map