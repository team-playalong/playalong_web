import 'ngreact';
import * as angular from 'angular';
import { react2angular } from 'react2angular';

// Modules
import './components/styled';

import RadioButtons, { props as RadioButtonsProps } from 'playalong-components/components/RadioButtons';
import TextInput, { props as TextInputProps } from 'playalong-components/components/TextInput';
import Rating, { props as RatingProps} from 'playalong-components/components/Rating';
import FavoriteBtn, { props as FavoriteBtnProps} from './components/favorites-btn/FavoriteBtn';
import TextSlider, { props as TextSliderProps} from 'playalong-components/components/TextSlider';
import Button, { props as ButtonProps} from 'playalong-components/components/Button';
import Icon, { props as IconProps} from 'playalong-components/components/Icon';
import Youtube, { props as YoutubeProps} from 'playalong-components/components/Youtube';
import PlySpinner, { props as PlySpinnerProps} from 'playalong-components/components/Spinner';
import AutoScroll, { props as AutoScrollProps } from 'playalong-components/components/AutoScroll';

angular.module('PlyReact', [
  'react',
  'PlyStyled',
])
.component('rating', react2angular(Rating, RatingProps as any))
.component('radioButtons', react2angular(RadioButtons, RadioButtonsProps as any))
.component('textInput', react2angular(TextInput, TextInputProps as any))
.component('favoriteBtn', react2angular(FavoriteBtn, FavoriteBtnProps as any))
.component('textSlider', react2angular(TextSlider, TextSliderProps as any))
.component('plyButton', react2angular(Button, ButtonProps as any))
.component('plyIcon', react2angular(Icon, IconProps as any))
.component('plyYoutube', react2angular(Youtube, YoutubeProps as any))
.component('plySpinner', react2angular(PlySpinner, PlySpinnerProps as any))
.component('plyAutoScroll', react2angular(AutoScroll, AutoScrollProps as any))
;
