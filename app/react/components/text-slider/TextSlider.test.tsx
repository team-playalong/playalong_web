import * as React from 'react';
import { shallow } from 'enzyme';

import TextSlider from './TextSlider';

let wrapper;
const props = {
  min: 12,
  max: 20,
  size: 18,
};

beforeEach(() => {
  wrapper = shallow(<TextSlider {...props} />);
});

test('Should always be true', () => {
  expect(true).toBe(true);
});

test('Should have a min/max value', () => {
  expect(wrapper.find('.small-letter').props().style.fontSize).toBe(props.min);
  expect(wrapper.find('.big-letter').props().style.fontSize).toBe(props.max);
});
