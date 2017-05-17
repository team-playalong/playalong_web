import * as React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const RadioButtons = props => {
  const propTypes = {
    inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
    legend: PropTypes.string,
    radioName: PropTypes.string,
    onRadioChanged: PropTypes.func.isRequired, // eslint-disable-line
  };

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
    <MuiThemeProvider>
      <div>
        {!!props.legend && <label>{props.legend}</label>}
        <RadioButtonGroup
          onChange={handleChange}
          name={props.radioName}>
          {allRadioButtons}
        </RadioButtonGroup>
      </div>
    </MuiThemeProvider>
  );
};

export default RadioButtons;
