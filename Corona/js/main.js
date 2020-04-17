$( document ).ready(function(){
	$(".move_down").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".screen_2").offset().top
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
});
