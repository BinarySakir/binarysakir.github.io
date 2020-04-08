$('.sub_option').hide();
// $('.block_2, .block_3, .block_4, .sp_drawer_1, .sp_block_1').hide();
$('.obes').on('click', function(event) {        
	$('.sub_option').slideToggle();
});
$('.close_c').on('click', function(event) {        
	$('.close_c .sub_option').slideToggle();
});
$('.minimal_c').on('click', function(event) {        
	$('.minimal_c .sub_option').slideToggle();
});
$(".option").click(function(){
	$(".block_2 .option").removeClass("selected");
	if(!$(this).hasClass("o_sp")){
		$(this).toggleClass("selected");
	}else{
		$(".sub_option .option").click(function(){
			if($(".sub_option .option").hasClass("selected")){
				$(".obes").addClass("selected");
				$(".o_sp").addClass("selected");
				
			}else{
				$(".obes").removeClass("selected");
				$(".o_sp").removeClass("selected");
			}
		});
	}
});

// $(".selected").each( function(a){
// 	$(".block_1 .drawer").addClass("slideoff").fadeOut(500);
// });

$(".block_1 .proceed").click(function(){
	$(".block_1 .drawer .proceed").fadeOut(500);
	if($(".block_1 .drawer .option").hasClass("selected")){
		setTimeout(function(){$(".sp_block_1").fadeIn(500);}, 500)
		$(".sp_drawer_1").fadeIn(500);
		$(".sp_drawer_1 .option").click(function(){
			if($(".sp_drawer_1 .option").hasClass("selected")){
				// $(".sp_drawer_1").fadeOut(500);
				setTimeout(function(){
					$(".block_2").fadeIn(500);
				}, 500)
			}
		});
	}else{
			setTimeout(function(){$(".block_2").fadeIn(500);}, 500)
	}
});
$(".block_2 .proceed").click(function(){
	if($(".block_2 .selected").length === 1){
		if($(".block_2 .selected").text() === "Under 18"){
			if($(".sp_block_2").hasClass("shown") === false){
				$(".sp_block_2").fadeIn(500);
				$(".sp_block_2").addClass("shown")
				$(".second_slide").click(function(){
					$(".second_slide").removeClass("second_slide");
					$(".sp_block_2").append($(".sp_block_1"));
				});
			}
			$(".block_2 .selected").removeClass("selected");
		}
		else{
			$(".block_2 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_3").fadeIn(500);}, 500)
		}
	}
});

$(".block_3 .proceed").click(function(){
	if($(".block_3 .selected").length >= 1){
		$(".block_3 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_4").fadeIn(500);}, 500)
	}
})

$(".block_4 .proceed").click(function(){
	if($(".block_4 .selected").length >= 1){
		$(".block_4 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_5").fadeIn(500);}, 500)
	}
})

$(".block_5 .proceed").click(function(){
	if($(".block_5 .selected").length >= 1){
		$(".block_5 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_6").fadeIn(500);}, 500)
	}
})

$(".block_6 .proceed").click(function(){
	if($(".block_6 .selected").length >= 1){
		if($(".block_6 .selected").hasClass("exp")){
			$(".block_6 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_7").fadeIn(500);}, 500)
		}else{
			$(".block_6 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_8").fadeIn(500);}, 500)
		}
	}
})
