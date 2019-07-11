$(document).ready(function() {
	// Scroll Reveal
	ScrollReveal().reveal('.sr__b', { origin: 'bottom', interval: 150, distance: '20px' });
	
	// Check warranty toggle form
	var message_1 = "Perhaphs a warranty code?";
	var message_2 = "Perhaphs a phone number?";
	$('.switch-message').click(function(){
		if($(".q1").is(":visible")){
			$(".q1").hide();
			$(".q2").css({"display": "initial"});
			$(".input_").addClass("animated fadeInDown");
			$(this).text(message_2);
		}else{
			$(".q2").hide();
			$(".q1").css({"display": "initial"});
			$(".input_").addClass("animated fadeInDown");
			$(this).text(message_1);
		}
	});
	
});