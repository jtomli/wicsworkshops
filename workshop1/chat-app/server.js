"use strict"
// server socket
// these interactions appear in the terminal window
let server = require('socket.io');
let io = server(3000);

// establish connection to sever
io.on('connection', (socket) => {
  console.log("Got a connection!");

  // waits for a ping message
  socket.on('ping', (data) => {
    console.log("got a ping");

    // response
    socket.emit('pong');
  });
});
