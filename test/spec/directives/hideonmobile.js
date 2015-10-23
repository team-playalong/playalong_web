'use strict';

describe('Directive: hideOnMobile', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hide-on-mobile></hide-on-mobile>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hideOnMobile directive');
  }));
});
