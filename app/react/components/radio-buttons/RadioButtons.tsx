import * as React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import THEME from '../../helpers/theme';

const RadioButtons = props => {

  let currId;
  const handleChange = (e, val) => {
    props.onRadioChanged(val);
  };
  const allRadioButtons = props.inputs.map(input => {
    currId = input.value + Date.now();
    return (
        <RadioButton
          value={input.value}
          label={input.label}
          key={currId}
        />
    );
  });

  return (
    <MuiThemeProvider muiTheme={THEME}>
      <div>
        {!!props.legend && <label>{props.legend}</label>}
        <RadioButtonGroup
          onChange={handleChange}
          name={props.radioName || 'radio'}>
          {allRadioButtons}
        </RadioButtonGroup>
      </div>
    </MuiThemeProvider>
  );
};

export const props = ['inputs', 'onRadioChanged'];
export default RadioButtons;
