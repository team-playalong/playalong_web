import 'ngreact';
import * as angular from 'angular';
import { react2angular } from 'react2angular';

import RadioButtons from './components/radio-buttons/RadioButtons';
import TextInput from './components/text-input/TextInput';
import Rating, { props as RatingProps} from './components/rating/Rating';
import FavoriteBtn, { props as FavoriteBtnProps} from './components/favorites-btn/FavoriteBtn';
import TextSlider, { props as TextSliderProps} from './components/text-slider/TextSlider';

angular.module('PlyReact', [
  'react',
])
.directive('radioButtons', function(reactDirective) {
  return reactDirective(RadioButtons, ['inputs', 'onRadioChanged']);
})
.directive('textInput', function(reactDirective) {
  return reactDirective(TextInput, ['value', 'onChange', 'required']);
})
.directive('rating', function(reactDirective) {
  return reactDirective(Rating, RatingProps);
})
.component('favoriteBtn', react2angular(FavoriteBtn, FavoriteBtnProps as any))
.component('textSlider', react2angular(TextSlider, TextSliderProps as any));
