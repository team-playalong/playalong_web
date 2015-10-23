'use strict';

describe('Service: regexStore', function () {

  // load the service's module
  beforeEach(module('playalongWebApp'));

  // instantiate service
  var regexStore;
  beforeEach(inject(function (_regexStore_) {
    regexStore = _regexStore_;
  }));

  it('should do something', function () {
    expect(!!regexStore).toBe(true);
  });

});
