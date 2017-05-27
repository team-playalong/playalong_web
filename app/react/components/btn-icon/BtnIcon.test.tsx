import * as React from 'react';
import { shallow } from 'enzyme';

import BtnIcon from './BtnIcon';

let wrapper;
const props = {
  icon: 'test.svg',
  click: jest.fn(),
};

beforeEach(() => {
  wrapper = shallow(<BtnIcon {...props} />);
});

test('Should always be true', () => {
  expect(true).toBe(true);
});

test('BtnIcon should have an icon property', () => {
  expect(wrapper.props().name).toBe(props.icon);
});

test('BtnIcon should respond to click events', () => {
  const ev = {};
  wrapper.simulate('click', ev);
  expect(props.click.mock.calls[0][0]).toBe(ev);
});

// import * as React from 'react';
// import { shallow } from 'enzyme';
// import { expect } from 'chai';
// import sinon from 'sinon';
// import BtnIcon from './BtnIcon';
//
// describe('<BtnIcon />', () => {
//   let wrapper;
//   let input;
//   let expected;
//
//   const props = {
//     name: 'myInput',
//     id: 'myId',
//     placeholder: 'Please Enter Text',
//     maxlength: 60,
//     digOnChange: sinon.spy(),
//     errorMsg: 'wrong',
//     required: true,
//   };
//
//   it('should always work', () => {
//     expect(true).to.be(true);
//   });
//   // beforeEach(() => {
//   //   wrapper = shallow(<DigTextInput {...props} />);
//   //   input = wrapper.find('input').first();
//   //
//   // });
//   //
//   // it('support a name and id of the input', () => {
//   //   expected = input.props().name;
//   //   expect(expected).to.equal(props.name);
//   //
//   //   expected = input.props().id;
//   //   expect(expected).to.equal(props.id);
//   //
//   // });
//   //
//   // it('supports text type by defaule', () => {
//   //   expected = input.props().type;
//   //   expect(expected).to.equal('text');
//   // });
//   //
//   // it('supports a placeholder', () => {
//   //   expected = input.props().placeholder;
//   //   expect(expected).to.equal(props.placeholder);
//   // });
//   //
//   // it('supports a max length', () => {
//   //   expected = input.props().maxLength;
//   //   expect(expected).to.equal(props.maxlength);
//   // });
//   //
//   // it('supports error messages', () => {
//   //   expected = wrapper.find('.dig-input-error').first().text();
//   //   expect(expected).to.equal(props.errorMsg);
//   // });
//   //
//   // it('should support required', () => {
//   //   expected = wrapper.find('input').first().props().required;
//   //   expect(expected).to.equal(true);
//   // });
// });
