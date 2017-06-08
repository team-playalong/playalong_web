import * as React from 'react';
import { shallow } from 'enzyme';

import Logo from './Logo';

let wrapper;
const props = {

};

beforeEach(() => {
  wrapper = shallow(<Logo {...props} />);
});

test('Should have an img src', () => {
  expect(wrapper.find('img').props().src).toContain('plyIcon.png');
});
