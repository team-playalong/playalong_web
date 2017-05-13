import React, { PropTypes } from 'react-dom';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

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
    <div>
      {!!props.legend && <label>{props.legend}</label>}
      <RadioButtonGroup onChange={handleChange}>
        {allRadioButtons}
      </RadioButtonGroup>
    </div>
  );
};

RadioButtons.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  legend: PropTypes.string,
  name: PropTypes.string,
  onRadioChange: PropTypes.func.isRequired, // eslint-disable-line
};

export default RadioButtons;
