$(document).ready(function() {
	window.sr = new ScrollReveal();
	sr.reveal('.sr__b', { origin: 'bottom', interval: 150, distance: '20px' });
	var i = 1;
	var j = 3;
	$('.form_ div').hide();
	$('.form_ .q1').show();
	$('.form_ .q2, .form_ .q3').css({
		'visibility': 'visible'
	});
	$('.btn__next').click(function() {
	    if(i != j){
		    $('.q'+(i).toString()).hide();
		    $('.q'+(i+1).toString()).fadeIn("slow");
		    if(i === (j-1)){
		    	$('.btn__next').text("Submit");
		    }
		    i++;
	    }
	    else{
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