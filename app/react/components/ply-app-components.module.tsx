import 'ngreact';
import * as angular from 'angular';
import { react2angular } from 'react2angular';

// Modules
import './styled';

import FavoriteBtn, { props as FavoriteBtnProps } from './favorites-btn/FavoriteBtn';
import LanguagePicker, { props as LanguagePickerProps } from './language-picker/language-picker';
angular.module('PlyAppComponents', [
  'react',
  'PlyStyled',
])
.component('favoriteBtn', react2angular(FavoriteBtn, FavoriteBtnProps as any))
.component('plyLanguagePicker', react2angular(LanguagePicker, LanguagePickerProps as any))
;
