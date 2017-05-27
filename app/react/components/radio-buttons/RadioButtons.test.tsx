import RadioButtons from './RadioButtons';

test('RadioButtons is defined', () => {
  expect(RadioButtons).toBeDefined();
});

// TODO - Make it work
//
// import * as React from 'react';
// import { shallow } from 'enzyme';
// // import { expect } from 'chai';
// // import sinon from 'sinon';
// import RadioButtons from './RadioButtons';
//
// describe('<RadioButtons />', () => {
//   let wrapper;
//   let input;
//   let expected;
//
//   const props = {
//     name: 'radioBtns',
//   };
//
//   beforeEach(() => {
//     wrapper = shallow(<RadioButtons {...props} />);
//     // input = wrapper.find('input').first();
//   });
//
//   it('should support a name', () => {
//     expected = input.props().name;
//     expect(expected).toEqual(props.name);
//   });
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
