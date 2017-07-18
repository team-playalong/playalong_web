import * as React from 'react';
import BtnIcon from '../btn-icon/BtnIcon';
var defaults = {};
var REMOVE_MESSAGE = 'Song in favorites';
var ADD_MESSAGE = 'Click to add to favorites';
var styles = {
    fontSize: '25px',
    color: '#FF4081',
};
function FavoriteBtn(props) {
    return (React.createElement("span", { style: styles },
        React.createElement(BtnIcon, { tooltip: props.isFavorite ? REMOVE_MESSAGE : ADD_MESSAGE, icon: props.isFavorite ? 'heart' : 'heart-o', click: function () { return props.click(props.isFavorite); } })));
}
export var props = ['isFavorite', 'click'];
export default FavoriteBtn;
//# sourceMappingURL=FavoriteBtn.js.map