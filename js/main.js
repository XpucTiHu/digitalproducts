;(function($){

	/* Scroll */

	var header = $(".ba-header"),
	scrollTop;

	window.addEventListener('scroll', fixHeader);

	function fixHeader() {
    	scrollTop = window.pageYOffset;

		if (scrollTop >= 50) {
      		header.addClass('ba-stick');
    	} else{
      		header.removeClass('ba-stick');
    	}
  	}

  	fixHeader();

	$('a[href*="#"]').on('click', function(){
		event.preventDefault();
		$('body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 400);
	});

	/* Slider Works*/

	$(window).on('load', function(){


		$('.ba-works-slider').slick({
			dots: true,
			arrows: true,
			slide: '.ba-works-slide',
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
			// responsive: [
			//   {
			//     breakpoint: 1024,
			//     settings: {
			//       slidesToShow: 3,
			//       slidesToScroll: 3,
			//       infinite: true,
			//       dots: true
			//     }
			//   },
			//   {
			//     breakpoint: 600,
			//     settings: {
			//       slidesToShow: 2,
			//       slidesToScroll: 2
			//     }
			//   },
			//   {
			//     breakpoint: 480,
			//     settings: {
			//       slidesToShow: 1,
			//       slidesToScroll: 1
			//     }
			//   }
			//   // You can unslick at a given breakpoint now by adding:
			//   // settings: "unslick"
			//   // instead of a settings object
			// ]
			prevArrow: '.ba-slider--prev',
			nextArrow: '.ba-slider--next'
		});

	});

	/* Slider Team */

	$(document).ready(function(){
	    $('.works__slider').slick({
	        dots: true,
	        responsive: [
	            {
	                breakpoint: 850,
	                settings: {
	                    arrows: false
	                }
	            } ]

	    });
	    $('.team__slider').slick({
	        dots: false,
	        slidesToShow: 3,
	        centerMode: true,
	        centerPadding: '-10px',
	        initialSlide: 1,
	        responsive: [
	            {
	                breakpoint: 1100,
	                settings: {
	                    slidesToShow: 2,
	                    centerMode: false,
	                    initialSlide: 0,
	                }
	                },
	            {
	                breakpoint: 768,
	                settings: {
	                    slidesToShow: 1,
	                    centerMode: false,
	                    initialSlide: 0,
	                }
	            }]
	    });
	});

})(jQuery);

/* Google map */

var map;
function initMap() {
    map = new google.maps.Map(document.querySelector('.contact__map'), {
        center: {lat: -7.9342459, lng: 112.6396613},
        zoom: 17,
        scrollwheel: false,
    });

    var image = 'img/map-pointer.png';
    var marker = new google.maps.Marker({
        position: {lat: -7.9342459, lng: 112.6396613},
        map: map,
        icon: image
    });

}
document.addEventListener('DOMContentLoaded', initMap);

/* Smooth scrool */

$(document).ready(function(){
    $('.nav-item a').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1800);
        e.preventDefault();
    });
    return false;
});

$(document).ready(function(){
    $('.contact a').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1800);
        e.preventDefault();
    });
    return false;
});