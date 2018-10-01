// custom.js
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active');
});
});
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
      
  window.sr = ScrollReveal();
  sr.reveal('header', {
    duration: 2000,
    origin:'bottom'
  });
  
  sr.reveal('.hero', {
    duration: 2000,
    origin:'bottom'
  });
  sr.reveal('.social-media', {
    duration: 4000,
    origin:'bottom'
  });
  sr.reveal('#why .text-lead', {
    duration: 2000,
    origin:'right',
    distance:'300px',
    viewFactor: 0.2
  });
  sr.reveal('section#workouts .workout-item', {
    interval: 500,
    origin:'left',
    distance:'300px',
    viewFactor: 0.2
  });

  sr.reveal('section#pricing .pricing-tier', {
    interval: 500,
    origin:'left',
    distance:'300px',
    viewFactor: 0.2
  });




