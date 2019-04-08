// Step 2: Require the https module

var https = require('https');

console.log('I did it!');

//Step 3: Make a simple request
var options = {
    host: 'www.example.org',
    path: '/'
  };
  
//terminal answer: I did it!


  // called by https when the request is made.
  var callback = function() {
    console.log('In response handler callback!');
  }
  
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


