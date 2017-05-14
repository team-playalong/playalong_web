import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function setErrorText(props) {
  return props.required && !props.value ?
    'This field is required' :
    null;
}

const TextInput = (props) => {

  const handleChange = (e, newValue) => { 
    props.onChange(e.target.value);
  };

  const id = props.id || Date.now();
  return (
    <MuiThemeProvider>
      <div>
        <label htmlFor={id}>{props.label || ''}</label>
        <TextField
          hintText={props.placeholder}
          errorText={setErrorText(props)}
          value={props.value}
          onChange={handleChange}
        />
      </div>
    </MuiThemeProvider>
  );
};

export default TextInput;
