$(document).ready(function() {
	var data = [740, 92, 7, 37, 4, 42, 31, 8]
	var widthOfCol = $(".container .col")[0].offsetWidth - 10;
	var drawerHeight = $(window).height() - $(".container").offset().top;
	var drawer = $(".drawer");
	$(".district .circle").css("height", widthOfCol+"px");
	$(".district .circle").css("width", widthOfCol+"px");
	$(".drawer").css("height", drawerHeight+"px");
	$(".container .col").click(function(){

		// THIS IS FOR DEMO ONLY 
		var num = $(this).attr("data-num");
		$(".drawer h1").html($(this).text());
		$(".drawer h2 span").html(data[num]);
		
		drawer.show();
	});
	$(document).mouseup(function (e){
		if(!drawer.is(e.target) && drawer.has(e.target).length === 0){
			drawer.fadeOut(500);		
		}
	});
});