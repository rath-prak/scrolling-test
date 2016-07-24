$(document).ready(function(){

	// variables
	var controller, 
		$navItem = $('.nav-items li').not('.active'),
		$navActive = $('.nav-active'),
		$navTrigger = $('.nav-tripper'),
		getTriggersDown = $('.slide-pos'),
		triggersDown = [];

		// triggers ob the way down
		$.each(getTriggersDown, function(key, value){
			var id = '#' + value.id;
			triggersDown.push(id);
			console.log(triggersDown);

		})

		// triggersDown = [
		// "#slide02-pos",
		// "#slide03-pos",
		// "#slide04-pos",
		// "#slide05-pos",
		// "#slide06-pos",
		// "#slide07-pos",
		// "#slide08-pos",
		// "#slide09-pos",
		// ]

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
			console.log('crossfade to next', triggerDown)
		})
		.addIndicators({
			name: "triggerDown", 
			index: 500,
			colorStart: "yellow",
			colorTrigger: "yellow" 
		})
		.addTo(controller)
	});























}); // end of document ready
