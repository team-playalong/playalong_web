import { plyRadioButtonGroup } from './ply-radio-button';
import plyTextInput from './ply-text-input';

angular.module('plyFormElements', [
	'ngMaterial',
])
.component('plyRadioButtonGroup', plyRadioButtonGroup)
.component('plyTextInput', plyTextInput);
