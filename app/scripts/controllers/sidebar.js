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
    		text: 'Search',
    		ref: 'home',
        icon: 'search'
    	},
      {
        text: 'Chord Builder',
        ref: 'builder.new',
        icon: 'pencil'
      }
    ];


    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {

        });
    };
  }]);
