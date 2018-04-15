var https = require('https');

// var options = {
//   host: 'www.example.org',
//   path: '/'
// };
//
//
var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};
//

// called by https when the request is made.
// var callback = function() {
//   console.log('In response handler callback!');
// }
// var callback = function(response) {
//   console.log('In response handler callback!');
//   console.log('Response: ', response);
// }
// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  // !!!! by the following response.on with data and chunk argument,
  // it returns html page.
  // the callback output with chunk.length is as the bottom of this file.
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");

// callback happens after the response is returned
//
//
// callback data from exaple.org
/* [-- CHUNK OF LENGTH 1270 --]
<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 50px;
        background-color: #fff;
        border-radius: 1em;
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        body {
            background-color: #fff;
        }
        div {
            width: auto;
            margin: 0 auto;
            border-radius: 0;
            padding: 1em;
        }
    }
    </style>
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is established to be used for illustrative examples in documents. You may use this
    domain in examples without prior coordination or asking for permission.</p>
    <p><a href="http://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>
*/
