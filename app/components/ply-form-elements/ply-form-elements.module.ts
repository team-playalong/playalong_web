import { plyRadioButton, plyRadioButtonGroup } from './ply-radio-button';
import plyTextInput from './ply-text-input';

angular.module('plyFormElements', [
	'ngMaterial',
])
.component('plyRadioButton', plyRadioButton)
.component('plyRadioButtonGroup', plyRadioButtonGroup)
.component('plyTextInput', plyTextInput);
