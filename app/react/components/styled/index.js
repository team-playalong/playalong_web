import 'ngreact';
import * as angular from 'angular';
import { react2angular } from 'react2angular';
import PlyTitle, { props as PlyTitleProps } from './Title';
angular.module('PlyStyled', [
    'react',
])
    .component('plyTitle', react2angular(PlyTitle, PlyTitleProps));
//# sourceMappingURL=index.js.map