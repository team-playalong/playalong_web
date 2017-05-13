import * as React from 'react';
import { render } from 'react-dom';
import RadioButtons from '../../react/components/RadioButtons';

export const plyRadioButtonGroup = {
//   template: `
//     <RadioButtons />
//       <ply-radio-button
//         ng-repeat="d in $ctrl.plyRadioData"
//         ply-value="d.value"
//         ply-label="d.label" />
//       </md-radio-button>
//     </md-radio-group>
// `,
  bindings: {
    plyRadioData: '=',
    plyModel: '=',
  },
  controller: ['$element', function($element) {
    this.$onInit = () => {
      render(
        <RadioButtons
          name='searchBy'
          inputs={this.plyRadioData}
        />,
        $element[0],
      );
    };

  }],
};
