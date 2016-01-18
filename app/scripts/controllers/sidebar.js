'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('SidebarCtrl',['$scope','$mdSidenav',
    function ($scope, $mdSidenav) {
      $scope.menuItems = [
      	{
      		text: 'sidebar.menu.SEARCH',
      		ref: 'home',
          icon: 'search'
      	},
        {
          text: 'sidebar.menu.CHORD_BUILDER',
          ref: 'builder.new',
          icon: 'pencil'
        },
        {
          text: 'sidebar.menu.FAVORITES',
          ref: 'favorites',
          icon: 'heart'
        },
        {
          text: 'sidebar.menu.TUNER',
          ref: 'tuner',
          icon: 'music'
        },
        {
          text: 'sidebar.menu.METRONOME',
          ref: 'metronome',
          icon: 'caret-up'
        }
        
      ];
      $scope.close = function () {
        $mdSidenav('left').close()
          .then(function () {

          });
      };
  }]);
