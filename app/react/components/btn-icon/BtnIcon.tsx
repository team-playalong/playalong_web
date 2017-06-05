import * as React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import ReactTooltip from 'react-tooltip';

interface BtnIconProps {
  icon: string;
  click?: any;
  tooltip?: string;
}

const styles = {
  cursor: 'pointer',
};

function BtnIcon(props: BtnIconProps) {

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

export const props = ['icon', 'click', 'tooltip'];
export default BtnIcon;
