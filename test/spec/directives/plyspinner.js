'use strict';

describe('Directive: plySpinner', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ply-spinner></ply-spinner>');
    element = $compile(element)(scope);
    // expect(element('')).toBe('this is the plySpinner directive');
  }));
});
