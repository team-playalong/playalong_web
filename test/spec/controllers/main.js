'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var MainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller,$rootScope) {
    MainCtrl = $controller('MainCtrl', {
      $scope: $rootScope.$new()  
    });
  }));

  it('should always be true', function() {
        expect(true).toBe(true);
  });    
});
