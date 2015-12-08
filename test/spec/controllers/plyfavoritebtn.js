'use strict';

describe('Controller: PlyfavoritebtnCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var PlyfavoritebtnCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    PlyfavoritebtnCtrl = $controller('PlyfavoritebtnCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlyfavoritebtnCtrl.awesomeThings.length).toBe(3);
  });
});
