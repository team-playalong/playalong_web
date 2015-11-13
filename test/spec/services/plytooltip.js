'use strict';

describe('Service: plyTooltip', function () {

  // load the service's module
  beforeEach(module('playalongWebApp'));

  // instantiate service
  var plyTooltip;
  beforeEach(inject(function (_plyTooltip_) {
    plyTooltip = _plyTooltip_;
  }));

  it('should do something', function () {
    expect(!!plyTooltip).toBe(true);
  });

});
