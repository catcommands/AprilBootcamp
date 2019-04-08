// Step 2: Require the https module

var https = require('https');

console.log('I did it!');

// Terminal: I did it!

//Step 3: Make a simple request
var options = {
    host: 'stream-large-file.herokuapp.com',
    path: '/give-me-stuff-now'
  };
// From here, step 4,5,6 (see below untill here).
// Step 4: read the step 4 and "where's my response?" 
//and view souce code at https://example.org

//Step 5: This response. Modified the car callback function and included response.
//for step 5, node the file in terminal.

//Step 6: Read the data,
// Modified the callback function again

// called by https when the request is made.
var callback = function(response) {
    console.log('In response handler callback!');
  
    response.on('data', function(chunk) {
      console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
      console.log(chunk.toString());
    });
  }
// Until here, step 4,5,6
  console.log("I'm about to make the request!");
  
  https.request(options, callback).end();
  
  console.log("I've made the request!");

/*
Terminal:
I did it!
I'm about to make the request!
I've made the request!
In response handler callback!
*/

// Step 7: Switch to diff site!
