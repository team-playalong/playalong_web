import * as React from 'react';
// Needed for onTouchTap
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { generateUuid } from '../../helpers/uuid';
import THEME from '../../helpers/theme';

injectTapEventPlugin();

interface ButtonProps {
  type?: string;
  label: string;
  click: any;
}

const defaultProps = {
  type: 'raised',
};

function getButtonByType(props) {
  switch (props.type) {
    case 'raised':
    default:
      return <RaisedButton id={generateUuid()} primary={true} onClick={props.click} label={props.label} />;
  }
}

function Button(props: ButtonProps) {

  props = Object.assign({}, defaultProps, props);

  return (
    <MuiThemeProvider muiTheme={THEME}>
      <span>{getButtonByType(props)}</span>
    </MuiThemeProvider>
  );
}

export const props = ['label', 'click'];
export default Button;
