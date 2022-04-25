$(document).ready(function() {
    new WOW().init();

	$(".work-box-slide.owl-carousel").owlCarousel({
	  	items: 4,
	  	margin: 30,
	  	loop: true,
	  	nav: false,
	  	dots: false,
	  	autoplay: true,
	  	autoplayTimeout: 5000,
	  	responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1200:{
	            items:4,
	        }
	    }
  	});
  	$(".latest-maine.owl-carousel").owlCarousel({
	  	items: 4,
	  	margin: 30,
	  	loop: true,
	  	nav: false,
	  	dots: false,
	  	autoplay: true,
	  	autoplayTimeout: 5000,
	  	responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1200:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
  	});
  	$(".blog-maine.owl-carousel").owlCarousel({
	  	items: 3,
	  	margin: 30,
	  	loop: true,
	  	nav: false,
	  	dots: false,
	  	autoplay: true,
	  	autoplayTimeout: 5000,
	  	responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1200:{
	            items:3,
	            loop:false
	        }
	    }
  	});
  	$(".client-slide.owl-carousel").owlCarousel({
	  	items: 1,
	  	margin: 30,
	  	loop: true,
	  	nav: false,
	  	dots: false,
	  	autoplay: true,
	  	autoplayTimeout: 5000,
  	});
  	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	$('.counter').counterUp({
    	delay: 30,
	    time: 1000
	});
	
});

