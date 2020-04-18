$(document).ready(function() {
	var data = [740, 92, 7, 37, 4, 42, 31, 8]
	var data_dhaka = [["Adabor", 5], ["Agargaon", 2], ["Armanitola", 1], ["Ashkona", 1], ["Azimpur", 11], ["Babu Bazar", 11], ["Badda", 8], ["Baily Road", 3], ["Banani", 8], ["Bangshal", 15], ["Banianagar", 1]]
	var widthOfCol = $(".container .col")[0].offsetWidth - 10;
	var drawerHeight = $(window).height() - $(".container").offset().top;
	var drawer = $(".drawer");
	$(".district .circle").css("height", widthOfCol+"px");
	$(".district .circle").css("width", widthOfCol+"px");
	$(".drawer").css("height", drawerHeight+"px");
	$(".container .col").click(function(){

		// THIS IS FOR DEMO ONLY
		$(".drawer .info").empty();
		$(".info").css("max-height", drawerHeight-130+"px")
		if($(this).find(".circle").text() === "Dhaka"){
			for(var i = 0; i < data_dhaka.length; i++){
				$(".drawer .info").append("<p>" + data_dhaka[i][0] + " - " + data_dhaka[i][1] + "</p>");
			}
		}
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
