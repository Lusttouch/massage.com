jQuery(document).ready(function ($) {
	
   "use strict";

   $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 5);
    });

	var wow = new WOW(
    {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         true
        }
    );
    wow.init();

    $('#slider').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

});