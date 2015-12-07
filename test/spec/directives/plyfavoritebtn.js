'use strict';

describe('Directive: plyFavoriteBtn', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ply-favorite-btn></ply-favorite-btn>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the plyFavoriteBtn directive');
  }));
});
