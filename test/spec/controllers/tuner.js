'use strict';

describe('Controller: TunerCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var TunerCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    TunerCtrl = $controller('TunerCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TunerCtrl.awesomeThings.length).toBe(3);
  });
});
