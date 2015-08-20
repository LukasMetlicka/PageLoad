function animateStars(){
/*
			
	Creates Background stars

*/
	var starTimeline = new TimelineMax();

		var num_stars = 100;
		var duration = 1;
		var centerX = $(".animation-wrapper").width() / 2;
		var centerY = $(".animation-wrapper").height() / 2;
		var star, angle, delay;
		var isA = true;
		var isB = true;

		while(--num_stars > -1){

			star = $("<div class='stars' id='"num_stars"'></div>" ).appendTo(wrapper);
			stars.push(star.getElementById(num_stars));
			angle = Math.random() * Math.PI * 2;
			delay = Math.random() * duration;
			starTimeline.set(star, {display: "block"}, delay);
			TweenLite.set(star, {
				width: 2, 
				height: 2, 
				y: centerY, 
				x: centerX, 
				z: 0.1, 
				position: "absolute", 
				backgroundColor:"white", 
				borderRadius: 100, 
				opacity:0, 
				boxShadow: "0px 0px 2px #fff"
			});
			TweenLite.to(star, 0.3, {opacity:1});

			var region = getRandomIntInclusive(1, 8);

			if(region == 1){
				x_val = getRandomIntInclusive(-40, -20);
				y_val = getRandomIntInclusive(-40, -20);
			} else if(region == 2){
				x_val = getRandomIntInclusive(-21, 1440);
				y_val = -40;
			} else if (region == 3){
				x_val = getRandomIntInclusive(1441, 1460);
				y_val = getRandomIntInclusive(-40, -20);
			} else if (region == 4){
				x_val = 1460;
				y_val = getRandomIntInclusive(-20, 500);
			} else if(region == 5){
				x_val = getRandomIntInclusive(1440, 1460);
				y_val = getRandomIntInclusive(500, 520);
			} else if (region == 6){
				x_val = getRandomIntInclusive(-20, 1440);
				y_val = 520;
			} else if(region == 7){
				x_val = getRandomIntInclusive(-40, -20);
				y_val = getRandomIntInclusive(500, 520);
			} else if(region == 8){
				x_val = -40;
				y_val = getRandomIntInclusive(-20, 500)
			}

			starTimeline.add( new TweenMax(star, duration, {
			    y: y_val,
		        x: x_val,
		        scale:1.5,
		        ease:Cubic.easeIn,
		        repeat: 1000,
		        repeatDelay:0.1
		    }),delay);
		}
	return starTimeline;
}