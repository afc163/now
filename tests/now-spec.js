var expect = require('expect');
var now = require('../index');
var moment = require('moment');

describe('now', function() {

  it('should be a string', function() {
    expect(now).to.be.a('string');  // add this
  });

  it('should be a valid date string', function() {
    expect(moment(now, 'MMMM Do YYYY, h:mm:ss a').isValid()).to.be(true);
  });

});
