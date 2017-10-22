// need to handle posting a message
// lets consider some variables we would need to do this
// should know the user who sent the message
// the message contents

var messageItem = function(user, message) {
  // let's think of the html
  return "<strong>" + user + "</strong>: " + message;
}

var postMessage = function(contents) {
  console.log("ERROR: jQuery not ready");
}

// var infoColor = '#888888';
// var errorColor = 'red';
// var messageColor = '#000000';
// var nameColor = 'blue';

var formatMessage = function(user, message) {
  return '<span style="color: ' + nameColor + '">' + user + '</span>' +
    ': ' + message;
};

// need this to confirm jQuery has loaded on browser
$(document).ready(function() {
  postMessage = function(contents) {
    // create list item and then add to list
    var listItem = "<li>" + contents + "</li>";
    $("#message-list").append(listItem);
  }
  // what signals we need to do something with a message?
  $("#message-form").submit(function(event) {
    event.preventDefault();

    // now what?
    // let's use a function
    postMessage(messageItem("Me", $("#message").val()));
    $("#message").val("");
  });

  $('<li><span style="color: ' + color + '">'
      + contents + '</span></li>').hide().appendTo('#messages').fadeIn(200);
});
