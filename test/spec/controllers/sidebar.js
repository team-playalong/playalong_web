'use strict';

describe('Controller: SidebarCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var SidebarCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    SidebarCtrl = $controller('SidebarCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SidebarCtrl.awesomeThings.length).toBe(3);
  });
});
