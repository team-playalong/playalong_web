'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('SidebarCtrl',['$scope','$mdSidenav','$translate',
    function ($scope, $mdSidenav,$translate) {
      $translate(['sidebar.menu.SEARCH','sidebar.menu.CHORD_BUILDER'])
      .then(function (translations) {
        $scope.menuItems = [
        	{
        		text: translations['sidebar.menu.SEARCH'],
        		ref: 'home',
            icon: 'search'
        	},
          {
            text: translations['sidebar.menu.CHORD_BUILDER'],
            ref: 'builder.new',
            icon: 'pencil'
          }
        ];


        $scope.close = function () {
          $mdSidenav('left').close()
            .then(function () {

            });
        };
      });
  }]);
