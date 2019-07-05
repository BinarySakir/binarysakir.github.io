$('p').click(function() {
	$(".in1").addClass("animated fadeOutUp");
	$(".in1").hide();
	$(".in2").css({"display": "initial"});
	$(".in2").addClass("animated fadeInUp");
});