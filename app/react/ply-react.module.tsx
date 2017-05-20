import 'ngreact';

import RadioButtons from './components/RadioButtons';
import TextInput from './components/TextInput';
import AutoScroll from './components/auto-scroll/AutoScroll';

angular.module('PlyReact', [
  'react',
])
.value('RadioButtons', RadioButtons)
.value('AutoScroll', AutoScroll)
.value('TextInput', TextInput);
