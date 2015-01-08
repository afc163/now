var moment = require('moment');
var now = function() {
  moment().format('MMMM Do YYYY, h:mm:ss a');
};

module.exports = now;
