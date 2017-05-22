import 'ngreact';

import RadioButtons from './components/radio-buttons/RadioButtons';
import TextInput from './components/text-input/TextInput';

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
});
