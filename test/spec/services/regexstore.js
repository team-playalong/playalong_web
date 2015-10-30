'use strict';

describe('Service: regexStore', function () {

  // load the service's module
  beforeEach(module('playalongWebApp'));

  // instantiate service
  var RegexStore;
  beforeEach(inject(function (_RegexStore_) {
    RegexStore = _RegexStore_;
  }));

  it('should supprt getting a chord', function () {
    expect(!!RegexStore).toBe(true);
    expect(angular.equals(RegexStore.get('hebrew'),/[\u0590-\u05e8\u05e9-\u05ff]/g)).toBe(true);
  });

});
