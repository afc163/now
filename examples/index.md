# Demo

---

## Normal usage

<div id="now-output"></div>

````javascript
var now = require('../index');
var $ = require('jquery');

setInterval(function() {
  $('#now-output').html(now());
}, 500);
````
