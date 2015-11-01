'use strict';
 /*jshint unused:false*/

describe('Directive: autoscrollWidget', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<autoscroll-widget></autoscroll-widget>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the autoscrollWidget directive');
  }));
});
