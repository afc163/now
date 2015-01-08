var moment = require('moment');
var now = function() {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
};

module.exports = now;
