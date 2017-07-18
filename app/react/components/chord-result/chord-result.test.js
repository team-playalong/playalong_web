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
import PlyChordResult from './chord-result';
var wrapper;
var props = {
    chord: {
        artist: 'Asaf Avidan',
        title: 'Gold Shadow',
    },
};
describe('chord result component', function () {
    beforeEach(function () {
        wrapper = shallow(React.createElement(PlyChordResult, __assign({}, props)));
    });
    test('should be true', function () {
        expect(true).toBe(true);
    });
});
//# sourceMappingURL=chord-result.test.js.map