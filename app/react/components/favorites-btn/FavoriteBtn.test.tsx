import * as React from 'react';
import { shallow } from 'enzyme';

import FavoriteBtn from './FavoriteBtn';

let wrapper;
const props = {
  isFavorite: true,
};

function getWrapper() {
  return shallow(<FavoriteBtn {...props} />);
}

beforeEach(() => {
  wrapper = getWrapper();
});

test('should have the correct icon based on isFavorite', () => {
  const icon = wrapper.children().first();
  expect(icon.props().icon).toBe('heart');
});
