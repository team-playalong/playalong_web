import * as React from 'react';
import PropTypes from 'prop-types';
import Gauge from 'react-svg-gauge';
import 'jquery'
import 'jquery-ui/ui/widgets/draggable.js';

const styles = {
  widget: {
    width: '20%',
  },
};
const defaults = {
  min: 0,
  max: 5,
  label: 'Auto Scroll',
  value: 0,
  width: 150,
  height: 125,
};

class AutoScroll extends React.Component<{}, {}> {
  static propTypes = {
    // inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
    // legend: PropTypes.string,
    // radioName: PropTypes.string,
    // onRadioChanged: PropTypes.func.isRequired, // eslint-disable-line
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    $('.ply-autoscroll-widget').draggable();
  }

  render() {
    const newProps = Object.assign({}, defaults, this.props);
    return (
      <div
        className='well ply-autoscroll-widget'
        style={styles.widget}
      >
        <Gauge
          value={newProps.value}
          max={newProps.max}
          width={newProps.width}
          height={newProps.height}
          label={newProps.label}
        />
      </div>
    );
  }

}
export default AutoScroll;
