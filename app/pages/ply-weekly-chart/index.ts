import * as angular from 'angular';
import { weeklyChartCtrl, plyWeeklyChart } from './ply-weekly-chart';
import WeeklyChart from './weeklyChart.service';

angular.module('PlyWeeklyChart', [])
	.controller('weeklyChartCtrl', weeklyChartCtrl)
	.component('plyWeeklyChart', plyWeeklyChart)
	.service('WeeklyChart', WeeklyChart);
