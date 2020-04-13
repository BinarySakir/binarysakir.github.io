$( document ).ready(function(){
	$(".move_down").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".screen_2").offset().top
	    }, 1000);
	});
	$(".screen_2 .container .col-6").click(function(){
		var allTrigger = $(".screen_2 .container .col-6");
		var triggerClass = ((this.className).split(" "))[1];
		var drawerClass = ".drawer_" + triggerClass.split("_")[1];
		$(drawerClass).show();
		$("." + triggerClass + " svg path").css("fill", "#D7DF23");
		$("." + triggerClass + " p").css("color", "#D7DF23");
		allTrigger.not(this).addClass("disabled");
		$(document).mouseup(function (e){
			var container = $(drawerClass);
			if (!container.is(e.target) && container.has(e.target).length === 0){
				container.fadeOut();
				allTrigger.not(this).removeClass("disabled");
				$("." + triggerClass + " svg path").css("fill", "");
				$("." + triggerClass + " p").css("color", "");
			}
		});
	});
});
