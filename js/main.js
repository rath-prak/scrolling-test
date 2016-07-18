$(document).ready(function(){

	// variables
	var controller;

	// initialize ScrollMagic controller
	controller = new ScrollMagic.Controller();

	// scene 1 - pin our main section
	var pinScene01 = new ScrollMagic.Scene({
		triggerElement: '#main', 
		triggerHook: 0, 
		duration: '900%'
	})
	.setPin('#main .pin-wrapper', {pushFollowers: false})
	.addTo(controller);


}); // end of document ready


// '.setPin()' is a special scrollmagic method 