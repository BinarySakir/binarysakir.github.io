// ScrollReveal().reveal('.cnt-1 h5', {distance: '20px',});
// ScrollReveal().reveal('.cnt-1 a', {
// 	distance: '20px',
// 	easing: 'ease',
// 	delay: 200,
// 	interval: 200 });
// ScrollReveal().reveal('.cnt-2 .load-hidden', {
// 	distance: '20px',
// 	opactiy: 1,
// 	easing: 'ease',
// 	interval: 150 });
$(document).ready(function() {
	$('.container').css({
	    'position' : 'absolute',
	    'left' : '50%',
	    'top' : '50%',
	    'margin-left' : -$('.container').outerWidth()/2,
	    'margin-top' : -$('.container').outerHeight()/2
	});
	window.sr = new ScrollReveal();
	sr.reveal('.load-hidden', { origin: 'left', interval: 150, distance: '20px' });
	// $('#form').submit(function(e) {
 	//    	show error or submit data
	// });

})