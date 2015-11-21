'use strict';

describe('Directive: languagePicker', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<language-picker></language-picker>');
    element = $compile(element)(scope);
    expect(element).toBeDefined();
  }));
});