import 'ngreact';
import * as angular from 'angular';
import { react2angular } from 'react2angular';

import Title, { props as PlyTitleProps } from 'playalong-components/components/Title';
import PlyLogo from './Logo';

angular.module('PlyStyled', [
  'react',
])
.component('plyTitle', react2angular(Title, PlyTitleProps as any))
.component('plyLogo', react2angular(PlyLogo))
;
