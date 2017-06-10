import * as React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import THEME from '../../helpers/theme';

interface PlySpinnerProps {
  isActive: boolean;
}

// http://www.material-ui.com/#/components/circular-progress
function PlySpinner(props) {
  const styles = {
    display: props.isActive ? 'block' : 'none',
    zIndex: '1000',
    position: 'absolute',
    top: '50%',
    left: '50%',
  };

  return (
    <MuiThemeProvider muiTheme={THEME}>
      <CircularProgress size={60} thickness={5} style={styles}/>
    </MuiThemeProvider>
  );
}

export const props = ['isActive'];
export default PlySpinner;
