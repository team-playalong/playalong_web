import * as React from 'react';
import { shallow } from 'enzyme';

import PlyChordSearchCard from './chord-search-card';

let wrapper;
const props = {
  
};

beforeEach(() => {
  wrapper = shallow(<PlyChordSearchCard {...props} />);
});

// TODO - stablize
test.skip('should have the correct icon based on isFavorite', () => {
  console.log(wrapper);
  const icon = wrapper.children().first();
  expect(icon.props().icon).toBe('heart');
});
