import { autoscroll, AutoscrollCtrl } from './autoscroll.directive';
import AutoScroll from './AutoScroll';

angular.module('PlyAutoscroll', [
  'PlyReact',
])
.directive('autoscroll', autoscroll)
.value('AutoScroll', AutoScroll)
.controller('AutoscrollCtrl', AutoscrollCtrl);
