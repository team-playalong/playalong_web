'use strict';

describe('Controller: ChordCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var ChordCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    ChordCtrl = $controller('ChordCtrl', {
      $scope: $rootScope.$new()
    });
  }));
});
