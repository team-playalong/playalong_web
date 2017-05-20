import * as React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

interface BtnIconProps {
  icon: string;
  click?: any;
};

const styles = {
  cursor: 'pointer',
};

function BtnIcon(props: BtnIconProps) {

  return (
    <FontAwesome
      name={props.icon}
      onClick={props.click}
      style={styles}
    />
  );
}

export default BtnIcon;
