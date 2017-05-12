import { chordComponent, ChordCtrl } from './chord';
import { EqualChordsMap, transposer, ChordTranposeMap } from './transposer';
import plyFavoriteBtn from './plyfavoritebtn';
import PlyfavoritebtnCtrl from './plyfavoritebtn.conrtoller';
import '../../components/ply-autoscroll';

angular.module('PlyChord', [
  // TODO - stabilize it
  // 'PlyAutoscroll',
])
.controller('ChordCtrl', ChordCtrl)
.controller('PlyfavoritebtnCtrl', PlyfavoritebtnCtrl)
.constant('EqualChordsMap', EqualChordsMap)
.constant('ChordTranposeMap', ChordTranposeMap)
.service('transposer', transposer)
.directive('plyFavoriteBtn', plyFavoriteBtn)
.component('plyChord', chordComponent);