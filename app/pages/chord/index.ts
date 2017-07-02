import * as angular from 'angular';
import { chordComponent, ChordCtrl } from './chord';
import plyFavoriteBtn from './plyfavoritebtn';
import PlyfavoritebtnCtrl from './plyfavoritebtn.conrtoller';

angular.module('PlyChord', [
])
.controller('ChordCtrl', ChordCtrl)
.controller('PlyfavoritebtnCtrl', PlyfavoritebtnCtrl)
.component('plyFavoriteBtn', plyFavoriteBtn)
.component('plyChord', chordComponent);
