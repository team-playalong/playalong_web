'use strict';

describe('Service: Common', function () {

  // load the service's module
  beforeEach(module('playalongWebApp'));

  // instantiate service
  var Common;
  var login;
  var res;
  beforeEach(inject(function (_Common_, _login_) {
    Common = _Common_;
    login = _login_;
  }));

  it('should check if content is RTL', function () {
    var result = Common.isRtlContent('My English Content');
    expect(result).toBe(false);

    result = Common.isRtlContent('My עברית Content');
    expect(result).toBe(true);
  });
});
