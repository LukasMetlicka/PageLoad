function animateText(){
/* 
				
	This Section animates the Text flying to the lefthand corner.  
		
*/
	var tl = new TimelineMax();

	if($("#body").width() <= 720){
		tl.to(welcome2, 0.5, {opacity: 1})
		.to([welcome1, welcome2, welcome3], 0.5, {top: "-=" + percentToPixel_y(55), left: "-=" + percentToPixel_x(38.1)}, "+=2");
		TweenMax.to(stars, 0.2, {opacity: 0});
	}
	else {
		tl.to([welcome1, welcome2, welcome3], 0.5, {opacity: 1})
		.to([welcome1, welcome2, welcome3], 0.5, {top: "-=" + percentToPixel_y(4), left: "-=" + percentToPixel_x(38.1)}, "+=2");
		TweenMax.to(stars, 0.2, {opacity: 0});
	}
	
	tl
		.to([welcome1, welcome3], 1, {opacity: 0}, "-=0.8")
		.to(document.getElementById("logo"), 0.5, {opacity: 1}, "-=0.5")

		.to(background, 0.5, {backgroundColor: "white"}, "change")
		.to(welcome2, 0.5, {color: "black"}, "change")

		.to(body, 0.1, {overflowY: "visible"});

	return tl;
}