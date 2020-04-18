$( document ).ready(function(){
	$(".move_down").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".screen_2").offset().top
	    }, 500);
	});
	$(".learn_more").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".screen_3").offset().top
	    }, 500);
	});
	$(".screen_2 .container .col-6").click(function(){
		var allTrigger = $(".screen_2 .container .col-6");
		var triggerClass = ((this.className).split(" "))[1];
		var drawerClass = ".drawer_" + triggerClass.split("_")[1];
		$(drawerClass).show();
		$("." + triggerClass + " svg path").css("fill", "#D7DF23");
		$("." + triggerClass + " p").css("color", "#D7DF23");
		allTrigger.not(this).addClass("disabled");
		$(".screen_2 .container .col-6").css("pointer-events", "none");
		$(document).mouseup(function (e){
			$(".screen_2 .container .col-6").css("pointer-events", "initial");
			var container = $(drawerClass);
			if (!container.is(e.target) && container.has(e.target).length === 0){
				container.fadeOut();
				allTrigger.not(this).removeClass("disabled");
				$("." + triggerClass + " svg path").css("fill", "");
				$("." + triggerClass + " p").css("color", "");
				
			}
		});
	});
	var containerHeight = $(".screen_2 .learn_more").offset().top - $(".screen_2 .container").offset().top;
	$(".screen_2 .container").css("max-height", String(containerHeight) + "px");




	var data = [740, 92, 7, 37, 4, 42, 31, 8]
	var data_dhaka = [["Adabor", 5], ["Agargaon", 2], ["Armanitola", 1], ["Ashkona", 1], ["Azimpur", 11], ["Babu Bazar", 11], ["Badda", 8], ["Baily Road", 3], ["Banani", 8], ["Bangshal", 15], ["Banianagar", 1]]
	var widthOfCol = $(".screen_3 .container .col")[0].offsetWidth - 10;
	$(".screen_3 .district .circle").css("height", widthOfCol+"px");
	$(".screen_3 .district .circle").css("width", widthOfCol+"px");
	var drawerHeight = $(".screen_3 .container").height();
	var drawer = $(".screen_3 .drawer");
	$(".screen_3 .drawer").css("height", drawerHeight+20+"px");
	$(".screen_3 .container .col").click(function(){

		// THIS IS FOR DEMO ONLY
		$(".screen_3 .drawer .info").empty();
		$(".screen_3 .info").css("max-height", drawerHeight-130+"px")
		if($(this).find(".circle").text() === "Dhaka"){
			for(var i = 0; i < data_dhaka.length; i++){
				$(".screen_3 .drawer .info").append("<p>" + data_dhaka[i][0] + " - " + data_dhaka[i][1] + "</p>");
			}
		}
		var num = $(this).attr("data-num");
		$(".screen_3 .drawer h1").html($(this).text());
		$(".screen_3 .drawer h2 span").html(data[num]);
		
		drawer.css("display", "initial");
	});
	$(document).mouseup(function (e){
		if(!drawer.is(e.target) && drawer.has(e.target).length === 0){
			drawer.fadeOut(500);		
		}
	});
});