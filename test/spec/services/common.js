'use strict';

describe('Service: Common', function () {

  // load the service's module
  beforeEach(module('playalongWebApp'));

  // instantiate service
  let Common;

  beforeEach(inject(function (_Common_) {
    Common = _Common_;
  }));

  it('should check if content is RTL', function () {
    var result = Common.isRtlContent('My English Content');
    expect(result).toBe(false);

    result = Common.isRtlContent('My עברית Content');
    expect(result).toBe(true);
  });
});
