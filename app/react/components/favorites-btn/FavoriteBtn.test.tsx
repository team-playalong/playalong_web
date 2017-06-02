import * as React from 'react';
import { shallow } from 'enzyme';

import FavoriteBtn from './FavoriteBtn';

let wrapper;
const props = {
  isFavorite: true,
};

beforeEach(() => {
  wrapper = shallow(<FavoriteBtn {...props} />);
});

// TODO - stablize
test.skip('should have the correct icon based on isFavorite', () => {
  console.log(wrapper);
  const icon = wrapper.children().first();
  expect(icon.props().icon).toBe('heart');
});
