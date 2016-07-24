$(document).ready(function(){

	// variables
	var controller, 
		$navItem = $('.nav-items li').not('.active'),
		$navActive = $('.nav-active'),
		$navTrigger = $('.nav-tripper'),
		getTriggersDown = $('.slide-pos'),
		triggersDown = [],
		getTriggersUp = $('.slide-pos-reverse'),
		triggersUp = [];

		// triggers ob the way down
		$.each(getTriggersDown, function(key, value){
			var id = '#' + value.id;
			triggersDown.push(id);
			// console.log(triggersDown[key]);

		})

		// triggers on the way up
		$.each(getTriggersUp, function(key, value){
			var id = '#' + value.id;
			triggersUp.push(id);
			// console.log(triggersUp[key])
		})

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

	// scene 3 - trigger the right animation on the way DOWN

	triggersDown.forEach(function(triggerDown, index){
		var triggerTransitionToNext = new ScrollMagic.Scene({
			triggerElement: triggerDown,
			triggerHook: 0.6
		})
		.on('enter', function(e){
			// console.log('crossfade to next', triggerDown)
			var $slideOut = ('.slide.active'),
					slideIndex = triggerDown.substring(6,8),
					$slideIn = $('#slide' + slideIndex), 
					direction = e.scrollDirection;

			// console.log(e.scrollDirection)		
			crossFade($slideOut, $slideIn, direction); // this is where the main animations between the scrolling will take place.

		})
		.addIndicators({
			name: "triggerDown", 
			index: 500,
			colorStart: "yellow",
			colorTrigger: "yellow" 
		})
		.addTo(controller)
	}); // end of trigger function

	// scene 4 - trigger the right animation on the way UP

		triggersUp.forEach(function(triggerUp, index){
		var triggerTransitionToPrev = new ScrollMagic.Scene({
			triggerElement: triggerUp,
			triggerHook: 0.49
		})
		.on('leave', function(e){
			// console.log('crossfade to previous', triggerUp)
		})
		// .addIndicators({
		// 	name: "triggerUp", 
		// 	index: 110,
		// 	colorStart: "black",
		// 	colorTrigger: "black" 
		// })
		.addTo(controller)
	}); // end of trigger function


		// cross fade fucntion goes here
		function crossFade($slideOut, $slideIn, direction){

		}








}); // end of document ready
