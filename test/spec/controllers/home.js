'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var HomeCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    HomeCtrl = $controller('HomeCtrl', {
      $scope : $rootScope.$new()
    });
  }));

  

});
