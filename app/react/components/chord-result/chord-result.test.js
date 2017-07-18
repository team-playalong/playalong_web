import * as React from 'react';
import { shallow } from 'enzyme';

import PlyChordResult from './chord-result';

let wrapper;
const props = {
  chord: {
    artist: 'Asaf Avidan',
    title: 'Gold Shadow',
  },
};

describe('chord result component', () => {
  beforeEach(() => {
    wrapper = shallow(<PlyChordResult {...props} />);
  });

  test('should be true', () => {
    expect(true).toBe(true);
  });
});
