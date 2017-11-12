// Let's add text to our About Me.
$('#abouttext').text("This is WiCS Side Projects!!");

// We can also create a new div AND set its contents without modifying the HTML File.
$('#container').append("<div class='info' id='resumetext'> Resume is private </div>");
$('#container').append("<div class='info' id='interesttext'> Sorry I'm not interesting </div>");
$('#container').append("<div class='info' id='contacttext'> me@gmail.com <br> <a href='http://github.com'>Github</a></div>");

var onClick = (el) => {
  $('.active').removeClass('active');
  $(el).addClass('active');
}

$('#home').click( () => {onClick('#hometext')});
$('#about').click( () => {onClick('#abouttext')});
$('#resume').click( () => {onClick('#resumetext')});
$('#interests').click(() => {onClick('#interesttext')});
$('#contact').click( () => {onClick('#contacttext')});
