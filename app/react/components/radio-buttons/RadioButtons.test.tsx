import * as React from 'react';
import { shallow } from 'enzyme';

import RadioButtons from './RadioButtons';

let wrapper;
const props = {
  inputs: [
    { label: 'l1', value: 'v1' },
    { label: 'l2', value: 'v2' },
  ],
  radioName: 'myRadio',
};

beforeEach(() => {
  wrapper = shallow(<RadioButtons {...props} />);
});

test('true', () => {
  expect(true).toBe(true);
});
