$(document).ready(function(){

	// variables
	var controller, 
		$navItem = $('.nav-items li').not('.active'),
		$navActive = $('.nav-active'),
		$navTrigger = $('.nav-tripper')

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


	// Navigation Timeline
	var navTl = new TimelineMax();

	// move navigation right by 26px for each item
	$navItem.each(function(){
		var slideHREF = $(this).find('a').attr('href'),
		    slideID = slideHREF.substr(slideHREF.length - 7),
		    moveNav = TweenMax.to($navActive, 1, {
		    	x: "+=26px",
		    	ease: Linear.easeNone
		    })
	// add indiviual tweens for each item
		navTl.add(moveNav, slideID)
	})

	// scene two - move navigation
	var navScene = new ScrollMagic.Scene({
		triggerElement: $navTrigger,
		duration: '800%'
	})
	.setTween(navTl)
	.addTo(controller);




}); // end of document ready
