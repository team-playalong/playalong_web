import { chordComponent, ChordCtrl } from './chord';
import { EqualChordsMap, transposer, ChordTranposeMap } from './transposer';
import ChordModel from './chord.model';
import plyFavoriteBtn from './plyfavoritebtn';
import PlyfavoritebtnCtrl from './plyfavoritebtn.conrtoller';
import '../../components/ply-autoscroll';

angular.module('PlyChord', [
  'PlyAutoscroll',
])
.controller('ChordCtrl', ChordCtrl)
.controller('PlyfavoritebtnCtrl', PlyfavoritebtnCtrl)
.constant('EqualChordsMap', EqualChordsMap)
.constant('ChordTranposeMap', ChordTranposeMap)
.service('ChordModel', ChordModel)
.service('transposer', transposer)
.directive('plyFavoriteBtn', plyFavoriteBtn)
.component('plyChord', chordComponent);
