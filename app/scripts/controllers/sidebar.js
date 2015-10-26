'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('SidebarCtrl',['$scope','$mdSidenav','login', function ($scope, $mdSidenav,login) {
    $scope.menuItems = [
    	{
    		text: 'Search',
    		ref: 'home',
        icon: 'search'
    	}
      // ,
      // {
      //   text: 'Chord Builder',
      //   ref: 'builder.new',
      //   icon: 'pencil'
      // }
    ];
    $scope.isSuperUser = function() {
      return login.getUser() && login.getUser().userType.indexOf('superuser') !== -1;  
    };
    

    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {

        });
    };
  }]);
