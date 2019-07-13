$(document).ready(function() {
	// Scroll Reveal
	ScrollReveal().reveal('.sr__b', { origin: 'bottom', interval: 150, distance: '20px' });
	
	// Check warranty toggle form
	var message_1 = "Perhaphs a warranty code?";
	var message_2 = "Perhaphs a phone number?";
	$('.switch-message').click(function(){
		if($(".q1").is(":visible")){
			$(".error").hide();
			$(".q1").hide();
			$(".q2").css({"display": "inherit"});
			$(".q2").addClass("animated fadeInDown fast");
			$(this).text(message_2);
		}else{
			$(".error").hide();
			$(".q2").hide();
			$(".q1").css({"display": "inherit"});
			$(".q1").addClass("animated fadeInDown fast");
			$(this).text(message_1);
		}
	});
	$('.btn__b').click(function(){
		$(".error").css({"display": "inherit"});
		$(".error").addClass("animated headShake");
		setTimeout(function() { 
	        $(".error").removeClass("animated headShake");
	    }, 1000);
	});
	
});