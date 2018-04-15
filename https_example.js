var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};
//console.log('I did it!');
//

// called by https when the request is made.
// var callback = function() {
//   console.log('In response handler callback!');
// }
var callback = function(response) {
  console.log('In response handler callback!');
  console.log('Response: ', response);
}
console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");

// callback happens after the response is returned