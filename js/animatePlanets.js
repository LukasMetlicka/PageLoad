function animatePlanets(){
/*

	This Section animates the planets moving. 

*/

	var percentToPixel_x = function(_percent){
		return $(".animation-wrapper").outerWidth()/100 * parseFloat(_percent)
	}
	var percentToPixel_y = function(_percent){
		return $(".animation-wrapper").outerHeight()/100 * parseFloat(_percent)
	}
	var percentoScale = function(_percent){
		return $("#body").width() * parseFloat(_percent)/100; 
	}

	var planetsTimeline = new TimelineMax();

		planetsTimeline
			.to(planets, 0.1, {top: centerY, left:centerX})
			.to(p1, 3, {width: percentoScale(100), margin: -percentoScale(100)/2, x: "-=" + percentToPixel_x(380), y: "+=" + percentToPixel_y(55),ease:Expo.easeIn})
			.to(p2,3, {width: percentoScale(100), margin: -percentoScale(100)/2, x: "+=" + percentToPixel_x(138.8), y: "-=" + percentToPixel_y(69.4), ease:Expo.easeIn}, "-=0.4")
			.to(p3,3, {width: percentoScale(100), margin: -percentoScale(100)/2, y: "+=" + percentToPixel_y(200), ease:Expo.easeIn}, "-=0.4")
			.to(p4,3, {width: percentoScale(100), margin: -percentoScale(100)/2, y: "-=" + percentToPixel_y(69.4), x:"-=" + percentToPixel_x(111), ease:Expo.easeIn}, "-=0.4")
			.to(p5,3, {width: percentoScale(250), margin: -percentoScale(250)/2, y: "+=" + percentToPixel_y(138.8), x:"+=" + percentToPixel_x(222.2),ease:Expo.easeIn}, "-=0.4")
			.to(p6,3, {width: percentoScale(100), margin: -percentoScale(100)/2, y: "-=" + percentToPixel_y(211.1), ease:Expo.easeIn}, "-=0.4")

			//Earth
			.to(p7,3, {width: percentoScale(75), margin: -percentoScale(75)/2, ease:Expo.easeIn}, "-=0.4")
			.to(p7, 1, {width: percentoScale(150), margin: -percentoScale(150)/2, rotation: "90deg", ease:Linear.easeNone}, "-=0.25")
			.add(rotateStars90())
			.add(rotateStarsNeg90())
			.add(animateStars())
			.to(p7, 1, {width: percentoScale(175), margin: -percentoScale(175)/2, y: "+=" + percentToPixel_y(250), ease:Linear.easeNone}, "-=0.25")
			.to(p7, 0.25, {x: "+=" + percentToPixel_x(100), width: percentoScale(200), margin: -percentoScale(200)/2, ease:Linear.easeNone})

			.to(p8,3, {rotation: "-90deg", width: percentoScale(100), margin: -percentoScale(100)/2, x: "-=" + percentToPixel_x(110), ease:Expo.easeIn}, "-=0.4")

			.to(p9,3, {width: percentoScale(150), margin: -percentoScale(150)/2, y: "-=" + percentToPixel_y(150), x: "-=" + percentToPixel_x(122), ease:Expo.easeIn}, "-=0.4")

			.to(p10,3, {width: percentoScale(100), margin: -percentoScale(100), ease:Expo.easeIn}, "-=0.4")
			.to(p10, 0.5, {rotation: "90deg", x: "+=" + percentToPixel_x(13.8), width: percentoScale(125), margin: -percentoScale(125)/2, ease:Linear.easeNone})
			.to(p10, 1, {x: "+=" + percentToPixel_x(343.8), width: percentoScale(1000), margin: -percentoScale(1000)/2, ease:Linear.easeNone}, "-=0.5"); 

	return planetsTimeline;
}