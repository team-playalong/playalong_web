import * as React from 'react';

interface TextSliderProps {
  elementClass?: string;
  size: number;
  onSliderChanged?: any;
  min?: number;
  max?: number;
}

interface TextSliderState {
  size: number;
}

class TextSlider extends React.Component<TextSliderProps, TextSliderState> {
  defaultProps = {
    min: 12,
    max: 24,
    size: 14,
  };

  constructor(props) {
    super(props);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      size: this.props.size || this.defaultProps.size,
    });
  }

  handleSliderChange(e) {
    this.setState({
      size: e.target.value,
    });
    if (this.props.elementClass) {
      const elements = document.querySelectorAll(`.${this.props.elementClass}`);
      for (let i = 0; i < elements.length; i++) {
        (elements[i] as any).style.fontSize = `${e.target.value}px`;
      }
    }

    if (typeof this.props.onSliderChanged === 'function') {
      this.props.onSliderChanged(e.target.value);
    }
  }

  render() {
    this.props = Object.assign({}, this.defaultProps, this.props);

    const styles = {
      wrapper: {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
      },
      minValue: {
        fontSize: this.props.min,
      },
      maxValue: {
        fontSize: this.props.max,
      },
      inputWrapper: {
        width: '100%',
      },
      input: {
        WebkitAppearance: 'none',
        display: 'inline',
      },
    };
    return (
      <span
        className='text-size-slider'
        style={styles.wrapper}>
        <span className='small-letter' style={styles.minValue}>A</span>
        <span style={styles.inputWrapper}>
          <input
            style={styles.input}
            type='range'
            min={this.props.min}
            max={this.props.max}
            className='slider'
            value={this.state.size}
            onChange={this.handleSliderChange}
          />
        </span>
        <span className='big-letter' style={styles.maxValue}>A</span>
      </span>
    );
  }

}

export const props = ['size', 'elementClass'];
export default TextSlider;
