import { plyRadioButton, plyRadioButtonGroup } from './ply-radio-button';

angular.module('plyFormElements', [
	'ngMaterial',
])
.component('plyRadioButton', plyRadioButton)
.component('plyRadioButtonGroup', plyRadioButtonGroup);
