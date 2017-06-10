import * as React from 'react';
import { shallow } from 'enzyme';

import PlySpinner from './Spinner';

let wrapper;
const props = {
  isActive: false,
};

beforeEach(() => {
  wrapper = shallow(<PlySpinner {...props} />).find('CircularProgress').first();
});

test('Should be hidden if not active', () => {
  expect(wrapper.props().style.display).toBe('none');
});
