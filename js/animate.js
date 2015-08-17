
window.onLoad = function(){
	TweenLite.to(document.getElementById("#left-img"), 2, {left: 600, onComplete: function(){ console.log("Ran")}});
}