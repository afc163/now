# Demo

---

## Normal usage

<div id="now-output"></div>

````javascript
seajs.use(['index', 'jquery'], function(now, $) {
  setInterval(function() {
    $('#now-output').html(now);
  }, 500);
});
````
