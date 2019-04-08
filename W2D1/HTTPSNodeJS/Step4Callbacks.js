var https = require('https'); // We need to set up https here to require data in cmd
var getData = "";

function getAndPrintHTML (options, callback) {

var requestOptions = {
    host: 'sytantris.github.io',// can be any website or link, but in our case it is already given a link
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response) {

  response.setEncoding('utf8');// is a variable width character encoding: https://en.wikipedia.org/wiki/UTF-8

response.on('data', function(data) {
getData += data;
  console.log(getData);

});

response.on('end', function() {
  console.log('Response stream complete.');
});

});

}

function printHTML (html) {
    console.log(html);
  }
console.log(getAndPrintHTML());// we need to console.log to call in the data we are requiring

/*
Step 2: result
Terminal:
undefined

<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>HTTP Requests - Step 2</title>
  </head>
  <body>
    <pre>

Nicely done. Now you should be seeing a neatly formatted HTML document,
not a crazy deluge of random chunks.
All hail the great +=! (or push, if you used an array...)

But we can still do better. This function is not modular.

In the next exercise, we'll pass the requestOptions as a param to the function,
so the function can be reused for different URLs.

Make sure you commit before you start the next Step!

    </pre>
  </body>
</html>

Response stream complete.
*/

/*
Step 3: result

<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>HTTP Requests - Step 2</title>
  </head>
  <body>
    <pre>

Nicely done. Now you should be seeing a neatly formatted HTML document,
not a crazy deluge of random chunks.
All hail the great +=! (or push, if you used an array...)

But we can still do better. This function is not modular.

In the next exercise, we'll pass the requestOptions as a param to the function,
so the function can be reused for different URLs.

Make sure you commit before you start the next Step!

    </pre>
  </body>
</html>

Response stream complete.




Step 4:

<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>HTTP Requests - Step 2</title>
  </head>
  <body>
    <pre>

Nicely done. Now you should be seeing a neatly formatted HTML document,
not a crazy deluge of random chunks.
All hail the great +=! (or push, if you used an array...)

But we can still do better. This function is not modular.

In the next exercise, we'll pass the requestOptions as a param to the function,
so the function can be reused for different URLs.

Make sure you commit before you start the next Step!

    </pre>
  </body>
</html>

Response stream complete.
*/