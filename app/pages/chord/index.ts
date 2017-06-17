import * as angular from 'angular';
import { chordComponent, ChordCtrl } from './chord';
import { EqualChordsMap, transposer, ChordTranposeMap } from './transposer';
import ChordModel from './chord.model';
import plyFavoriteBtn from './plyfavoritebtn';
import PlyfavoritebtnCtrl from './plyfavoritebtn.conrtoller';

angular.module('PlyChord', [
])
.controller('ChordCtrl', ChordCtrl)
.controller('PlyfavoritebtnCtrl', PlyfavoritebtnCtrl)
.constant('EqualChordsMap', EqualChordsMap)
.constant('ChordTranposeMap', ChordTranposeMap)
.service('ChordModel', ChordModel)
.service('transposer', transposer)
.component('plyFavoriteBtn', plyFavoriteBtn)
.component('plyChord', chordComponent);
