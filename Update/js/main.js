$(document).ready(function() {
	var widthOfCol = $(".container .col")[0].offsetWidth - 30;
	var drawerHeight = $(window).height() - $(".container").offset().top;
	var drawer = $(".drawer");
	$(".district .circle").css("height", widthOfCol+"px");
	$(".district .circle").css("width", widthOfCol+"px");
	$(".drawer").css("height", drawerHeight+"px");
	$(".container .col").click(function(){
		drawer.show();
	});
	$(document).mouseup(function (e){
		if(!drawer.is(e.target) && drawer.has(e.target).length === 0){
			drawer.fadeOut(500);		
		}
	});
});