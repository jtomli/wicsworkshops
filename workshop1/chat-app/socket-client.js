"use strict"
// client socket
// these interactions appear in the browser

// specifies the url with port 3000
var socket = io('http://localhost:3000');

// sending a message to a server
socket.emit('ping');

// gets server response pong message
socket.on('pong', (data) => {
  console.log('got a pong');
});
