var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';
var wrapper;
var props = {};
beforeEach(function () {
    wrapper = shallow(React.createElement(Logo, __assign({}, props)));
});
test('Should be true', function () {
    expect(wrapper).toBeDefined();
});
//# sourceMappingURL=Logo.test.js.map