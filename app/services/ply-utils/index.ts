import PlyTooltip from './plytooltip';
import Common from './common';
import Toast from './toast';
import PlyDate from './ply-date.service';
import RegexStore from './regexstore';
import PlyStorage from './plyStorage.service';

angular.module('PlyUtils', [])
.service('PlyTooltip', PlyTooltip)
.service('Toast', Toast)
.service('PlyDate', PlyDate)
.service('RegexStore', RegexStore)
.service('PlyStorage', PlyStorage)
.service('Common', Common);
