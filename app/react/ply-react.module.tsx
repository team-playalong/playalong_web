import 'ngreact';

import RadioButtons from './components/RadioButtons';
import TextInput from './components/TextInput';

angular.module('PlyReact', [
  'react',
])
.value('RadioButtons', RadioButtons)
.value('TextInput', TextInput);
