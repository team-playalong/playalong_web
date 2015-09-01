'use strict';

describe('Directive: plaLyricsEditor', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should append the directive to a div', inject(function ($compile) {
    element = angular.element('<div pla-lyrics-editor></div>');
    element = $compile(element)(scope);
    expect(element[0]).toBeDefined();
  }));
});
