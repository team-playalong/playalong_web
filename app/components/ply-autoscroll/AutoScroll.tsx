import * as React from 'react';
import PropTypes from 'prop-types';
import Gauge from 'react-svg-gauge';
import BtnIcon from '../../react/components/btn-icon/BtnIcon';
import 'jquery';
import 'jquery-ui/ui/widgets/draggable.js';

const styles = {
  widget: {
    width: '20%',
    display: 'flex',
    'align-items': 'center',
  },
};
const defaults = {
  min: 0,
  max: 5,
  label: 'Auto Scroll',
  width: 150,
  height: 125,
  speed: 0,
  color: '#388e3c',
};

interface AutoScrollProps {
  onSpeedChanged: any;
  speed: number;
};

class AutoScroll extends React.Component<AutoScrollProps, {}> {

  constructor(props) {
    super(props);
    this.state = {
  };

    this.decreaseSpeed = this.decreaseSpeed.bind(this);
    this.increaseSpeed = this.increaseSpeed.bind(this);
  }

  increaseSpeed(e) {
    if (this.props.speed < defaults.max) {
      this.props.onSpeedChanged(1);
    }

  }

  decreaseSpeed(e) {
    if (this.props.speed > defaults.min) {
      this.props.onSpeedChanged(-1);
    }
  }

  componentDidMount() {
    $('.ply-autoscroll-widget').draggable();
  }

  render() {
    const newProps = Object.assign({}, defaults, this.props);
    return (
      <div>
        <div
          className='well ply-autoscroll-widget'
          style={styles.widget}
        >
          <BtnIcon icon='minus' click={this.decreaseSpeed} />
          <Gauge
            value={this.props.speed}
            max={newProps.max}
            width={newProps.width}
            height={newProps.height}
            label={newProps.label}
          />
          <BtnIcon icon='plus' click={this.increaseSpeed} />
        </div>
      </div>
    );
  }

}

export default AutoScroll;
