import { chordComponent, ChordCtrl} from './chord';
import { EqualChordsMap, transposer, ChordTranposeMap } from './transposer';

angular.module('PlyChord', [])
.controller('ChordCtrl', ChordCtrl)
.constant('EqualChordsMap', EqualChordsMap)
.constant('ChordTranposeMap', ChordTranposeMap)
.service('transposer', transposer)
.component('plyChord', chordComponent);
