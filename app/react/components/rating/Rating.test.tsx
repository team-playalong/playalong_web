import * as React from 'react';
import { shallow } from 'enzyme';

import Rating from './Rating.tsx';

let wrapper;
const props = {
  readonly: true,
  max: 5,
  value: 3,
  click: jest.fn(),
};

function getWrapper() {
  return shallow(<Rating {...props} />);
}

beforeEach(() => {
  wrapper = getWrapper();
});

test('Rating should have a readonly class', () => {
  const ul = wrapper.find('ul').first();
  expect(ul.hasClass('readonly')).toBe(true);
});

test('Rating should render all rating options', () => {
  const options = wrapper.find('li');
  expect(options.length).toBe(props.max);
});

test('Rating should fill stars according to value', () => {
  const options = wrapper.find('li.filled');
  expect(options.length).toBe(props.value);
});

test('Rating should respond to click on one of the options', () => {
  props.readonly = false;
  getWrapper().find('li').first().simulate('click');
  expect(props.click.mock.calls[0][0]).toBe(1);
});
