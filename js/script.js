$(document).ready(function() {
  /* Scroll on button */
  $('.js--scroll-to-portfolio').click(function() {
    $('html, body').animate(
      { scrollTop: $('.section-portfolio').offset().top },
      800
    );
  });
});
