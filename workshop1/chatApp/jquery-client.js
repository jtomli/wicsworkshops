$(document).ready(function() {
  var formatMessage = function(user, message) {
    return "<span> " + user + " : " + message + " </span>";
  };

  var postMessage = function(contents) {
    var message = "<li> " + contents + " </li>";
    $("#message-list").append(message);
  };

  $("#message-form").submit(function(event) {
    event.preventDefault();

    var message = $("#message-box").val();
    postMessage(formatMessage("Jamie", message));

    $("#message-box").val("");
  });
});
