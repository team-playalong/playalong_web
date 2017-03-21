'use strict';

describe('Directive: plyFavoriteBtn', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  let element;
  let scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ply-favorite-btn></ply-favorite-btn>');
    element = $compile(element)(scope);
    expect(element).toBeDefined();
  }));
});
