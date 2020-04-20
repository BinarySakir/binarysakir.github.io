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
		$(".screen_2 .info_drawer_close").click(function(){
			$(drawerClass).fadeOut();
			allTrigger.not(this).removeClass("disabled");
			$("." + triggerClass + " svg path").css("fill", "");
			$("." + triggerClass + " p").css("color", "");
		});
	});
	var containerHeight = $(".screen_2 .learn_more").offset().top - $(".screen_2 .container").offset().top;
	$(".screen_2 .container").css("max-height", String(containerHeight) + "px");




	var data_dhaka = [["Adabor", 5], ["Agargaon", 2], ["Armanitola", 1], ["Ashkona", 1], ["Azimpur", 11], ["Babu Bazar", 11], ["Badda", 8], ["Baily Road", 3], ["Banani", 8], ["Bangshal", 15], ["Banianagar", 1]]
	var data = [[630, ["Dhaka (District)", 28], ["Gazipur", 117], ["Kishoreganj", 33]], [92, ["Chattogram", 37], ["Cox’s bazar", 1], ["Cumilla", 15], ["Chattogram", 37], ["Cox’s bazar", 1], ["Cumilla", 15], ["Chattogram", 37], ["Cox’s bazar", 1], ["Cumilla", 15], ["Chattogram", 37], ["Cox’s bazar", 1], ["Cumilla", 15]]]
	
	$(".screen_3 td, .screen_3 .division span").click(function(){
		var index = $(this).attr("data-n");
		var totalCase = data[index][0];
		var divisioName = $(this).text();
		$(".drawer h1").html(divisioName);
		$(".drawer h2 span").html(totalCase);
		for(var j = 1; j < data[index].length; j++){
			$(".drawer .info").append("<p>"+data[index][j][0]+" - "+data[index][j][1]+"</p>");
		}
		$(".drawer").css("display", "initial");
	});
	$("._close").click(function(){
		$(".drawer").css("display", "none");
		$(".drawer .info").empty();	
	});

	var week_max;
	var week_data = [];
	$(".screen_3 .drawer .graph").css("width", $(window).width()-30 + "px");
	$(".screen_3 .drawer .graph div").each(function() {
		week_data.push($(this).attr( "data-d" ));
	});
	week_max = Math.max.apply(Math, week_data);
	var k = 0;
	$(".drawer .graph div").each(function() {
		$(this).css("height", week_data[k]/week_max*100 + "px");
		k++;
	});
	$(".receive_update_btn").click(function(){
		$(".cases").fadeOut();
		$(".weekly_update").fadeIn();
	});
	$(".go_back").click(function(){
		$(".weekly_update").fadeOut();
		$(".cases").fadeIn();
	});
	
	// for showing demo only
	$(".weekly_update_form button").click(function(){
		$(".weekly_update_message").fadeIn();
		$(".weekly_update_form").fadeOut();
	});
	
});