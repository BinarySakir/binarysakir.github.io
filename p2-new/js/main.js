$(document).ready(function() {
	// Scroll Reveal
	window.sr = new ScrollReveal();
	sr.reveal('.sr__b', { origin: 'bottom', interval: 150, distance: '20px' });
	
	// Start warranty form
	var i = 1;
	var j = 3;
	var errorMessages = {
		1 : "Please enter a valid name.",
		2 : "Please enter a valid phone number.",
		3 : "Please enter a valid dealer code."
	};
	var e = 0;			// validation error
	$('.form_ div').hide();
	$('.form_ .q1').show();
	$('.form_ .q2, .form_ .q3').css({
		'visibility': 'visible'
	});
	$('.btn__next').click(function() {
	    if(i != j){
		    if(e != 1){		// if there is no error
			    $('.q'+(i).toString()).hide();
			    $('.q'+(i+1).toString()).fadeIn("slow");
			    if(i === (j-1)){
			    	$('.btn__next').text("Submit");
			    }
			    i++;
		    }else{		// if there is error
		    	var p = '.q'+(i).toString();
		    	$('.q'+(i).toString()).addClass('input__red');
		    	$('.error').append(errorMessages[i]);
		    }
	    }
	    else{			// if it's the last input
	    	alert("Done!"); // Here redirect the user to the result page
	    }
	});
	// $('.btn-back').click(function() {
	//     if(i != 1){
	// 	    $('.q'+(i).toString()).hide();
	// 	    $('.q'+(i-1).toString()).fadeIn("slow");
	// 	    i--;
	//     }else{
	//     	return false;
	//     }
	// });
})