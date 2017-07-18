import * as React from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlyImage from 'playalong-components/components/Image';
impor
;
import THEME  from '../../helpers/theme';;
export function renderHitCount((itCount)) {
    return (React.createElement("div", null, "Viewed " + itCount} + " time" + (itCount  > 1  ? 's'  : ''})));
}
function PlyChordResult((rops:) {
    var ChordResultComp  = (_a = ["\n    height: 120px;\n    position: relative;\n    cursor: pointer;\n    p {\n      margin: 0;\n    }\n    img {\n      float: left;\n      margin-right: 10px;\n    }\n    hr {\n      position: absolute;\n      bottom: 0;\n      height: 1px;\n      width: 100%;\n    }\n  "], _a.raw = ["eight: 120px;\n    position: relative;\n    cursor: pointer;\n    p {\n      margin: 0;\n    }\n    img {\n      float: left;\n      margin-right: 10px;\n    }\n    hr {\n      position: absolute;\n      bottom: 0;\n      height: 1px;\n      width: 100%;\n    }\n  `"], styled..iv`(_a));
    return (React.createElement(uiThemeProvider , { muiTheme=: HEME} },
        "      <",
        React.createElement(hordResultComp , { onClick=: function () { return props..lick((rops..hord)); } },
            "        {",
            rops..hord..magePath  && React.createElement(lyImage
, { type=: avatar'
, height=: 80px'
, width=: 80px'
, src=: rops..hord..magePath} }),
            "        <",
            React.createElement("h4", null, rops..hord..rtist}),
            "        <",
            React.createElement("p", null, rops..hord..itle}),
            "        {",
            enderHitCount((rops..hord..itCount)),
            "        <",
            React.createElement("ply-rating", { readonly=: true" , value=: $ctrl.chord.rating"> }),
            "        <",
            React.createElement("hr", null),
            "      <"),
        "    <"));
    var _a;
}
export var props  = [chord',, 'click']];
export default PlyChordResult;;
//# sourceMappingURL=chord-result.js.map