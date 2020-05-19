(function($) {
    "use strict";

$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body, carousel').animate({
          scrollTop: (target.offset().top - 150)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 600);
    });


})(jQuery);