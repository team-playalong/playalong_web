import './AudioContextMonkeyPatch';

import { TunerCtrl, plyTuner } from './tuner.component';

angular.module('PlyTuner', [])
.controller('TunerCtrl', TunerCtrl)
.component('plyTuner', plyTuner);
