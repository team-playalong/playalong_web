import * as React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const RadioButtons = props => {
  let currId;
  const handleChange = (e, val) => {
    props.onRadioChange(val);
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
          name={props.name}>
          {allRadioButtons}
        </RadioButtonGroup>
      </div>
    </MuiThemeProvider>
  );
};

// RadioButtons.propTypes = {
//   inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
//   legend: PropTypes.string,
//   name: PropTypes.string,
//   onRadioChange: PropTypes.func.isRequired, // eslint-disable-line
// };

export default RadioButtons;
