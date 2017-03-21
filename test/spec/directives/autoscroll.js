'use strict';

describe('Directive: autoscroll', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  var element;
  let scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div autoscroll></div>');
    element = $compile(element)(scope);
    expect(element).toBeDefined();
    //expect(element.text()).toBe('this is the autoscroll directive');
  }));
});
