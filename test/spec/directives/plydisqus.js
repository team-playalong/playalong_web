'use strict';

describe('Directive: plyDisqus', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ply-disqus></ply-disqus>');
    element = $compile(element)(scope);
    expect(element).toBeDefined();
  }));
});
