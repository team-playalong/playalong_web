'use strict';

describe('Service: regexStore', function () {

  // load the service's module
  beforeEach(module('playalongWebApp'));

  // instantiate service
  var RegexStore;
  beforeEach(inject(function (_RegexStore_) {
    RegexStore = _RegexStore_;
  }));

  it('should do something', function () {
    expect(!!RegexStore).toBe(true);
  });

});
