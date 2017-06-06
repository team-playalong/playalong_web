import * as React from 'react';
import { shallow } from 'enzyme';

import Youtube from './Youtube';

let wrapper;
const props = {
  videoId: '123',
};

beforeEach(() => {
  wrapper = shallow(<Youtube {...props} />);
});

test('Should have a src', () => {
  expect(wrapper.find('iframe').props().src).toContain(props.videoId);
});
