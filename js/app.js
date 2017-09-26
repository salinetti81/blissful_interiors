

// About Page slide up
$(document).ready(function() {
  $("#creativeSlideUp").click(function() {
    $('html, body').animate({
      scrollTop: $("#creativeProcess").offset().top -10},
        'slow');
  });
});//ends document.ready for jQuery

// Hidden email for formspree.io
var contactform =  document.getElementById('contactform');
contactform.setAttribute('action', '//formspree.io/' + 'dansalinetti' + '@' + 'gmail' + '.' + 'com');
