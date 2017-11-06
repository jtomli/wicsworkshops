/******************************
 * This is a simple express app
 ******************************/

// get the express module
var express = require('express');
// make an express object. Remeber - everything in 
// JavaScript is an object, and we will use predefined methods
// that are built into the Express library.
var app = express();

// define where the server should live
var port = 3000;

// If the server receives a GET request at the root url, send "hello world"
app.get('/', function (req, res, next) {
  return res.send('hello world');
});
// If the server receives a GET request at the route "/fancy", send cats
app.get('/fancy', function (req, res, next) {
  return res.send('cats');
});

// Our server will listen for requests at the specified port.
app.listen(port, function (req, res, next) {
  console.log('Magic happens on port 3000');
});