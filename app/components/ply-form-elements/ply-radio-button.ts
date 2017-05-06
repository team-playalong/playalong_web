export const plyRadioButton = {
  template: `
    <md-radio-button
      ng-value="$crtl.plyValue"
      ng-disabled="false">
      {{$ctrl.plyLabel}}
    </md-radio-button>
  `,
  bindings: {
    plyValue: '=',
    plyLabel: '<',
  },
};

export const plyRadioButtonGroup = {
  template: `
    <md-radio-group ng-model="$ctrl.plyModel" class="md-primary">
      <md-radio-button
        ng-repeat="d in $ctrl.plyRadioData"
        ng-value="d.value">
        {{d.label | translate}}
      </md-radio-button>
    </md-radio-group>
`,
  bindings: {
    plyRadioData: '=',
    plyModel: '=',
  },
};
