'use strict';

describe('Directive: plaLyricsEditor', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pla-lyrics-editor></pla-lyrics-editor>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the plaLyricsEditor directive');
  }));
});
