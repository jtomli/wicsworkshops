// Let's add text to our About Me.
$('#abouttext').text("This is WiCS Side Projects!!");

// We can also create a new div AND set its contents without modifying the HTML File.
$('#container').append("<div class='info' id='resumetext'> Resume is private </div>");


/*Let's make our nav buttons listen to clicks! 
 *We are attaching an event listener for the "click"
 *event to the element with the id "home". When the "click" 
 *event occurs, we execute the callback (the function).
 * */
$('#home').click( function () {
  $('#hometext').css('color', 'blue');
});

// Same thing using different JavaScript syntax
$('#about').click( () => {
  $('.active').removeClass('active');
  $('#abouttext').addClass('active');
})