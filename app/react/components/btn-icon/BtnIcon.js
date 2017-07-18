import * as React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import ReactTooltip from 'react-tooltip';

// TODO
// interface BtnIconProps {
//   icon: string;
//   click?: any;
//   tooltip?: string;
//   size?: string;
// }

const styles = {
  cursor: 'pointer',
  padding: '5px',
  verticalAlign: 'middle',
  fontSize: 'initial',
};

function BtnIcon(props) {
  if (props.size) {
    styles.fontSize = props.size + 'px';
  }

  return (
    <span>
      <FontAwesome
        name={props.icon}
        onClick={props.click}
        style={styles}
        data-tip={props.tooltip}
      />
      <ReactTooltip place='top' type='dark' effect='float' />
    </span>

  );
}

export const props = ['icon', 'click', 'tooltip', 'size'];
export default BtnIcon;
