import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import RadioButtons from '../../react/components/radio-buttons/RadioButtons';

export const plyRadioButtonGroup = {
  bindings: {
    plyRadioData: '=',
    plyModel: '=',
    plyOnChange: '=',
  },
  controller: ['$element', function($element) {
    this.$onInit = () => {
      render(
        <RadioButtons
          name='searchBy'
          inputs={this.plyRadioData}
          onRadioChange={this.plyOnChange}
        />,
        $element[0],
      );
    };
    this.$onDestroy = () => unmountComponentAtNode($element[0]);
  }],
};
