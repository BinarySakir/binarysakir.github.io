$(document).ready(function() {
	// Scroll Reveal
	window.sr = new ScrollReveal();
	sr.reveal('.sr__b', { origin: 'bottom', interval: 150, distance: '20px' });
	
	// Start warranty form
	// the validation process is just my idea
	// let me know anything needs to be changed
	var i = 1;
	var j = 3;
	var errorMessages = {
		1 : "Please enter a valid code.",
		2 : "Please enter a valid phone number.",
		3 : "Please enter a valid dealer code."
	};
	var e = 1;			// validation error
	$('.form_ div').hide();
	$('.form_ .qv1').show();
	$('.form_ .qv2, .form_ .qv3').css({
		'visibility': 'visible'
	});
	$('.btn__next').click(function() {
		// call ajax and check if there's any error
		// if there's an error, then set e = 1
	    if(i != j){
		    if(e != 1){		// if there is no error
			    $('.qv'+(i).toString()).hide();
			    $('.qv'+(i+1).toString()).fadeIn("slow");
			    if(i === (j-1)){
			    	$('.btn__next').text("Submit");
			    }
			    i++;
		    }else{		// if there is error
		    	$('.qv'+(i).toString()).addClass('input__red');
		    	$('.error').append(errorMessages[i]);
		    }
	    }
	    else{			// if it's the last input
	    	alert("Done!"); // Here redirect the user to the result page
	    }
	});
	$('.btn-back').click(function() {
	    if(i != 1){
		    $('.qv'+(i).toString()).hide();
		    $('.qv'+(i-1).toString()).fadeIn("slow");
		    i--;
	    }else{
	    	return false;
	    }
	});
})