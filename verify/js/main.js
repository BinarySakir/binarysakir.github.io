$(document).ready(function() {
	// Scroll Reveal
	ScrollReveal().reveal('.sr__b', { origin: 'bottom', interval: 150, distance: '20px' });
	
	// Verify Form
	var formClass = ".verify_form";
	var counter = 1;
	var totalInput = 3;
	var e = 0;		// e = 1 if there is error 

	$(formClass+".q2, "+formClass+".q3, .back").hide();
	$(formClass+".q2, "+formClass+".q3, .back").css({
		"display": "all",
	});

	errors = {
		1: "Please enter a valid product code",
		2: "Please enter a valid phone number",
		3: "The authentication code is incorrect"
	};

	function displayError(q){
		if( $('.error').is(':empty') ) {
			$(".error").append(errors[q]);
		};
	};

	$(".next").click(function(){
		if(e != 1){
			var currentClass = ".q"+counter.toString();
			var nextClass = ".q"+(counter+1).toString();
			switch(counter){
				case 1:
					$(currentClass).hide();
					$(nextClass).fadeIn(1000);
					$(".progress-bar").css({
						"width":"33.33%"
					});
					$(".back").show();
					counter++; break;
				case 2:
					$(currentClass).hide();
					$(nextClass).fadeIn(1000);
					$(".progress-bar").css({
						"width":"66.66%"
					});
					counter++; break;
				case 3:
					$(".progress-bar").css({
						"width":"100%"
					});
					setTimeout(function() {
						window.location.replace("result_a.html"); // redirect to result page
					}, 1000);
			}
		}else{
			displayError(counter);
		}
	});

	$(".back").click(function(){
		var currentClass = ".q"+counter.toString();
		var prevClass = ".q"+(counter-1).toString();
		switch(counter){
			case 2:
				$(currentClass).hide();
				$(prevClass).fadeIn(1000);
				$(".progress-bar").css({
					"width":"0%"
				});
				$(".back").hide();
				counter--; break;
			case 3:
				$(currentClass).hide();
				$(prevClass).fadeIn(1000);
				$(".progress-bar").css({
					"width":"33.33%"
				});
				counter--; break;
		}
	});

});