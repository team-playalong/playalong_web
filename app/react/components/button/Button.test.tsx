import * as React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

let wrapper;
const props = {
  label: 'GO',
  click: jest.fn(),
};

beforeEach(() => {
  wrapper = shallow(<Button {...props} />).find('span').children().first();
});

test('Button should have a text', () => {
  expect(wrapper.props().label).toBe(props.label);
});

test('Button should handle click', () => {
  wrapper.simulate('click');
  expect(props.click.mock.calls[0][0]).toBe(undefined);
});
