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
import FavoriteBtn from './FavoriteBtn';
var wrapper;
var props = {
    isFavorite: true,
};
beforeEach(function () {
    wrapper = shallow(React.createElement(FavoriteBtn, __assign({}, props)));
});
// TODO - stablize
test.skip('should have the correct icon based on isFavorite', function () {
    console.log(wrapper);
    var icon = wrapper.children().first();
    expect(icon.props().icon).toBe('heart');
});
//# sourceMappingURL=FavoriteBtn.test.js.map
