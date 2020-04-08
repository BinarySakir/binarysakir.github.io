function scrollTo(element){
	$("html, body").animate({ scrollTop: $(element).offset().top }, "slow")
}

// Show and hide sub options for obesity, kidney etc.

$('.sub_option').hide();
$('.obes_sub .obes').on('click', function(event) {        
	$('.obes_sub .sub_option').slideToggle();
});
$('.heartf_sub .heartf').on('click', function(event) {        
	$('.heartf_sub .sub_option').slideToggle();
});
$('.close_c_sub .close_c').on('click', function(event) {        
	$('.close_c_sub .sub_option').slideToggle();
});
$('.minimal_c_sub .minimal_c').on('click', function(event) {        
	$('.minimal_c_sub .sub_option').slideToggle();
});
$('.kidney_sub .kidney').on('click', function(event) {        
	$('.kidney_sub .sub_option').slideToggle();
});
$('.wide_area_sub .wide_area').on('click', function(event) {        
	$('.wide_area_sub .sub_option').slideToggle();
});


// go back from block_2 to block_1
$(".block_1 .option").click(function(){
	if($(".block_1 .option.none").hasClass("selected") && $(".block_2 .proceed").is(":visible")){
		$(".block_1 .option.none").removeClass("selected");
		$(".block_1 .drawer .proceed").fadeIn(500);
		$(".block_2").fadeOut(500);
	}
});
$(".block_3 .option").click(function(){
	if($(".block_3 .option.none").hasClass("selected") && $(".block_4 .proceed").is(":visible")){
		$(".block_3 .option.none").removeClass("selected");
		$(".block_3 .drawer .proceed").fadeIn(500);
		$(".block_4").fadeOut(500);
	}
});
$(".block_4 .option").click(function(){
	if($(".block_4 .option.none").hasClass("selected") && $(".block_5 .proceed").is(":visible")){
		$(".block_4 .option.none").removeClass("selected");
		$(".block_4 .drawer .proceed").fadeIn(500);
		$(".block_5").fadeOut(500);
	}
});
$(".block_5 .option").click(function(){
	if($(".block_6 .proceed").is(":visible")){
		// $(".block_5 .drawer .proceed").fadeIn(500);
		$(".block_6").fadeOut(500);
	}
});


$(".option").click(function(){
	$(".block_2 .option").removeClass("selected"); // select only one option at a time
	$(".block_5 .option").removeClass("selected");  // select only one option at a time
	if(!$(this).hasClass("o_sp") && !$(this).parent().parent().parent().parent().hasClass("o_sp")){	
		$(this).toggleClass("selected");
		if($(".block_1 .option.none").hasClass("selected")){
			$(".block_1 .option").removeClass("selected")
			$(".block_1 .option.none").addClass("selected")
			$(".block_1 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_2").fadeIn(500);}, 500)

		}
		if($(".block_3 .option.none").hasClass("selected")){
			$(".block_3 .option").removeClass("selected")
			$(".block_3 .option.none").addClass("selected")
			$(".block_3 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_4").fadeIn(500);}, 500)
		}
		if($(".block_4 .option.none").hasClass("selected")){
			$(".block_4 .option").removeClass("selected")
			$(".block_4 .option.none").addClass("selected")
			$(".block_4 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_5").fadeIn(500);}, 500)
		}
		if($(".block_5 .option").hasClass("selected")){
			$(".block_5 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_6").fadeIn(500);}, 500)
		}
		if($(".block_6 .option.none").hasClass("selected")){
			$(".block_6 .option").removeClass("selected")
			$(".block_6 .option.none").addClass("selected")
		}
		if($(".block_2 .selected").text() === "Under 18"){
			if($(".sp_block_2").hasClass("shown") === false){
				$(".sp_block_2").fadeIn(500);
				$(".sp_block_2").addClass("shown")
				$(".second_slide").click(function(){
					$(".second_slide").removeClass("second_slide");
					$("._u18").show();
					scrollTo("._u18");
				});
			}
			$(".block_2 .selected").removeClass("selected");
		}
	}else{
		// selected sub options
		$(".sub_option .option").click(function(){
			// console.log("ads");
			if($(this).hasClass("sub_o_1")){
				if($(this).hasClass("selected")){
					$(this).removeClass("selected");

				}
				else{
					$(this).addClass("selected");
					$($(this).parent().find(".sub_o_2")).removeClass("selected");
					$(this).parent().parent().parent().parent().addClass("selected");
				}
			}
			if($(this).hasClass("sub_o_2")){
				if($(this).hasClass("selected")){
					$(this).removeClass("selected");
				}
				else{
					$(this).addClass("selected");
					$($(this).parent().find(".sub_o_1")).removeClass("selected");}
					$(this).parent().parent().parent().parent().addClass("selected");
			}
			if(!$(this).parent().find(".sub_o_1").hasClass("selected") && !$(this).parent().find(".sub_o_2").hasClass("selected")){
				$(this).parent().parent().parent().parent().removeClass("selected");
			}
		});
	}
});


$(".block_1 .proceed").click(function(){
	if($(".block_1 .selected").length >= 1){
		$(".block_1 .drawer .proceed").fadeOut(500);
		if($(".block_1 .drawer .option").hasClass("selected") && $(".block_1 .drawer .option.none").hasClass("selected") === false){
			setTimeout(function(){$(".sp_block_1").fadeIn(500); scrollTo(".something");}, 500)
			setTimeout(function(){
				$(".sp_drawer_1").fadeIn(500);
			}, 500)
			$(".sp_drawer_1 .option").click(function(){
				if($(".sp_drawer_1 .option").hasClass("selected")){
					setTimeout(function(){
						$(".block_2").fadeIn(500); scrollTo(".block_2");
					}, 500)
				}
			});
		}else{
			setTimeout(function(){$(".block_2").fadeIn(500); scrollTo(".block_2");}, 500)
		}
	}
});


$(".block_2 .proceed").click(function(){
	if($(".block_2 .selected").length === 1){
		if($(".block_2 .selected").text() === "Under 18"){
			if($(".sp_block_2").hasClass("shown") === false){
				$(".sp_block_2").fadeIn(500);
				scrollTo(".sp_block_2");
				$(".sp_block_2").addClass("shown")
				$(".second_slide").click(function(){
					$(".second_slide").removeClass("second_slide");
					$("._u18").show();
					scrollTo("._u18");
				});
			}
			$(".block_2 .selected").removeClass("selected");
		}
		else{
			$(".block_2 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_3").fadeIn(500); scrollTo(".block_3");}, 500)
		}
	}
});

$(".block_3 .proceed").click(function(){
	if($(".block_3 .selected").length >= 1){
		$(".block_3 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_4").fadeIn(500); scrollTo(".block_4");}, 500)
	}
})

$(".block_4 .proceed").click(function(){
	if($(".block_4 .selected").length >= 1){
		$(".block_4 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_5").fadeIn(500); scrollTo(".block_5");}, 500)
	}
})

$(".block_5 .proceed").click(function(){
	if($(".block_5 .selected").length >= 1){
		$(".block_5 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_6").fadeIn(500); scrollTo(".block_6");}, 500)
	}
})

$(".block_6 .proceed").click(function(){
	if($(".block_6 .selected").length >= 1){
		if($(".block_6 .selected").hasClass("exp") && !$(".block_6 .proceed").hasClass("to7")){
			$(".block_6 .proceed").addClass("to7")
			$(".sp_block_3").show();
		}
		else if($(".block_6 .proceed").hasClass("to7")){
			$(".block_6 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_7").fadeIn(500); scrollTo(".block_7");}, 500)
		}
		else{
			$(".block_6 .drawer .proceed").fadeOut(500);
			// setTimeout(function(){$(".block_8").fadeIn(500); scrollTo(".block_8");}, 500)
		}
	}
})


$(".block_7 .proceed").click(function(){
	if($(".block_7 .selected").length >= 1){
		if($(".block_7 .selected").hasClass("close_c_sub")){
			$(".block_7 .drawer .proceed").fadeOut(500);
			$(".sp_block_4").show();
		}
		else if ($(".block_7 .selected").hasClass("minimal_c_sub")){
			$(".block_7 .drawer .proceed").fadeOut(500);
			$(".sp_block_5").show();
		}
	}
})
