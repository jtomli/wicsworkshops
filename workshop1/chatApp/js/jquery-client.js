// function waits for jQuery to be loaded onto browser
$(document).ready(function() {

  // function to format a message
  var formatMessage = function(user, message) {
    return "<span style=color:'blue'>" + user + " : " + message + " </span>";
  };

  // function to post our message to list
  var postMessage = function(color, contents) {
    var message = "<li><span style=color:'" + color + "'>" + contents + "</span> </li>";
    // accesses a "virtual element" (does not exist yet)
    // hides then fades in for visual effect, appending to message-list
    $(message).hide().appendTo("#message-list").fadeIn(200);
  };

  // message has been submitted
  $("#message-form").submit(function(event) {
    // prevent browser from controlling submit
    event.preventDefault();

    // value of our message-box
    var message = $("#message-box").val();
    postMessage("black", formatMessage("Jamie", message));
    $("#message-box").val("");
  });
});
