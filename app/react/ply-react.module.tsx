import 'ngreact';
import * as angular from 'angular';

import RadioButtons from './components/radio-buttons/RadioButtons';
import TextInput from './components/text-input/TextInput';
import Rating, { props as RatingProps} from './components/rating/Rating';

function addReactComponent(component) {
  return ['reactDirective', reactDirective => reactDirective(component)];
}

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
});
