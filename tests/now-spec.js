var expect = require('expect');
var now = require('../index');

describe('now', function() {

  it('normal usage', function() {
    expect(now).to.be.a('string');  // add this
  });

});
