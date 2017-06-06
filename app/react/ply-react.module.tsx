import 'ngreact';
import * as angular from 'angular';
import { react2angular } from 'react2angular';

import RadioButtons, { props as RadioButtonsProps } from './components/radio-buttons/RadioButtons';
import TextInput, { props as TextInputProps } from './components/text-input/TextInput';
import Rating, { props as RatingProps} from './components/rating/Rating';
import FavoriteBtn, { props as FavoriteBtnProps} from './components/favorites-btn/FavoriteBtn';
import TextSlider, { props as TextSliderProps} from './components/text-slider/TextSlider';
import Button, { props as ButtonProps} from './components/button/Button';
import BtnIcon, { props as BtnIconProps} from './components/btn-icon/BtnIcon';
import Youtube, { props as YoutubeProps} from './components/youtube/Youtube';

angular.module('PlyReact', [
  'react',
])
.component('rating', react2angular(Rating, RatingProps as any))
.component('radioButtons', react2angular(RadioButtons, RadioButtonsProps as any))
.component('textInput', react2angular(TextInput, TextInputProps as any))
.component('favoriteBtn', react2angular(FavoriteBtn, FavoriteBtnProps as any))
.component('textSlider', react2angular(TextSlider, TextSliderProps as any))
.component('plyButton', react2angular(Button, ButtonProps as any))
.component('btnIcon', react2angular(BtnIcon, BtnIconProps as any))
.component('plyYoutube', react2angular(Youtube, YoutubeProps as any));
