'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('SidebarCtrl',['$scope','$mdSidenav', function ($scope, $mdSidenav) {
    $scope.menuItems = [
    	{
    		text: 'Home',
    		ref: 'home',
        icon: 'home'
    	},
      {
        text: 'Favorites',
        ref: 'favorites',
        icon: 'star'
      },
      {
        text: 'Builder',
        ref: 'builder',
        icon: ''
      }
    ];


    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {

        });
    };
  }]);
