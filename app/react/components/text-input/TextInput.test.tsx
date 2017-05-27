import * as React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

let wrapper;
const props = {
  label: 'My Text Input',
  value: 'My Val',
};

beforeEach(() => {
  wrapper = shallow(<TextInput {...props} />);
});

test('TextInput should have a label', () => {
  const label = wrapper.find('label').first();
  expect(label.text()).toBe(props.label);
});

test('TextInput should have a value', () => {
  const input = wrapper.find('TextField').first();
  expect(input.props().value).toBe(props.value);
});
