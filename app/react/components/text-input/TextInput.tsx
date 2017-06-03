import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { generateUuid } from '../../helpers/uuid';
import { invokeIfFunction } from '../../helpers/common';

interface TextInputProps {
  id?: string;
  name?: string;
  label?: string;
  value: string;
  placeholder?: string;
  onChange?: any;
}

function setErrorText(props) {
  return props.required && !props.value ?
    'This field is required' :
    null;
}

const defaultProps = {
  placeholder: '',
  name: 'textInput',
  id: generateUuid(),
};

function TextInput(props: TextInputProps) {

  const handleChange = (e, newValue) => {
    invokeIfFunction(props.onChange, e.target.value);
  };

  props = Object.assign({}, defaultProps, props);

  return (
    <MuiThemeProvider>
      <div>
        <label htmlFor={props.id}>{props.label || ''}</label>
        <TextField
          id={props.id}
          name={name}
          defaultValue={props.value}
          hintText={props.placeholder}
          errorText={setErrorText(props)}

          onChange={handleChange}
        />
      </div>
    </MuiThemeProvider>
  );
}

export const props = [];
export default TextInput;
