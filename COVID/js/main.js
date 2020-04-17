function scrollTo(element){
	$("html, body").animate({ scrollTop: $(element).offset().top }, "slow")
}

// Show and hide sub options for obesity, kidney etc.

$('.sub_option').hide();

// slide in and off the multiple options drawer
$('.o_sp div:first-child').on('click', function(event) {        
	$(this).parent().find(".sub_option").slideToggle();
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
	if($(this).parent().parent().parent().hasClass("block_2")){$(".block_2 .option").removeClass("selected");}
	if($(this).parent().parent().parent().hasClass("block_5")){$(".block_5 .option").removeClass("selected");}
	if($(this).parent().parent().parent().parent().hasClass("block_gender")){$(".block_gender .option").removeClass("selected");}
	if($(this).parent().parent().parent().hasClass("block_6")){
		if(!$(this).hasClass("o_sp")){
			$(".block_6 .option").removeClass("selected");
		}else{
			$(".block_6 .option").not($(".block_6 .option .sub_option .option")).removeClass("selected");
			if($(".block_6 .sub_option .option").hasClass("selected")){
				$(".block_6 .o_sp").addClass("selected");
			}
		}
	}
	if(!$(this).hasClass("o_sp") && !$(this).parent().parent().parent().parent().hasClass("o_sp")){	
		
		$(this).toggleClass("selected");
		if($(".block_1 .option.none").hasClass("selected")){
			$(".block_1 .option").removeClass("selected")
			$(".block_1 .option.none").addClass("selected")
			$(".block_1 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_3").fadeIn(500);}, 500)

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
	}
});


$(".show_close_mini").click(function(){
  $(".close_mini").toggle();
});


// this deals with selecting and deselecting sub options
$(".sub_option .option").click(function(){
	$(this).toggleClass("selected");
	if(!$(this).parent().parent().parent().hasClass("both")){
		$(this).parent().find(".option").not(this).removeClass("selected");
	}
	if($(this).parent().find(".option").hasClass("selected")){
		$(this).parent().parent().parent().parent().addClass("selected");
	}else{
		$(this).parent().parent().parent().parent().removeClass("selected");
	}
});

$(".block_gender .proceed").click(function(){
	if($(".block_gender .selected").length === 1){
		$(".block_gender .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_2").fadeIn(500);}, 500)

	}
});

// **** DO NOT CONFUSE ******
// block_1, the symptoms block
// was supposed to be shown at
// first,  but  as  an  abrupt
// change of decision was made
// the .block_2, the age block
// is   now  shown  at  first.


$(".block_1 .proceed").click(function(){
	if($(".block_1 .selected").length >= 1){
		$(".block_1 .drawer .proceed").fadeOut(500);
		// if($(".block_1 .drawer .option").hasClass("selected") && $(".block_1 .drawer .option.none").hasClass("selected") === false){
		// 	setTimeout(function(){$(".sp_block_1").fadeIn(500); scrollTo(".something");}, 500)
		// 	setTimeout(function(){
		// 		$(".sp_drawer_1").fadeIn(500);
		// 	}, 500)
		// 	$(".sp_drawer_1 .option").click(function(){
		// 		if($(".sp_drawer_1 .option").hasClass("selected")){
		// 			setTimeout(function(){
		// 				$(".block_3").fadeIn(500); scrollTo(".block_3");
		// 			}, 500)
		// 		}
		// 	});
		// }else{
			setTimeout(function(){$(".block_3").fadeIn(500); scrollTo(".block_3");}, 500)
		// }
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
			setTimeout(function(){$(".block_1").fadeIn(500); scrollTo(".block_1");}, 500)
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
		// if($(".block_6 .selected").hasClass("exp") && !$(".block_6 .proceed").hasClass("to7")){
		// 	$(".block_6 .proceed").addClass("to7")
		// 	$(".sp_block_3").fadeIn(500);
		// }
		// else if($(".block_6 .proceed").hasClass("to7")){
		// 	$(".block_6 .drawer .proceed").fadeOut(500);
		// 	setTimeout(function(){$(".block_7").fadeIn(500); scrollTo(".block_7");}, 500)
		// }
		// else{
			$(".block_6 .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_7").fadeIn(500); scrollTo(".block_7");}, 500)
		// }
	}
})


$(".block_7 .proceed").click(function(){
	if($(".block_7 .selected").length >= 1){
		if($(".block_7 .selected").hasClass("close_c_sub")){
			$(".block_7 .drawer .proceed").fadeOut(500);
			$(".sp_block_5").show();
			$(".info").show();
		}
		else if ($(".block_7 .selected").hasClass("minimal_c_sub")){
			$(".block_7 .drawer .proceed").fadeOut(500);
			$(".sp_block_4").show();
			$(".info").show();
		}else{
			$(".block_7 .drawer .o_sp").css("border-width", "3px")
		}
	}
})

$(".minimal_c_sub .option").click(function(){
	if( $(".sp_block_5").is(":visible")){
		$(".close_c_sub").removeClass("selected")
		$(".close_c_sub .sub_o_1").removeClass("selected");
		$(".close_c_sub .sub_o_2").removeClass("selected");
		 $(".sp_block_5").hide();
		 $(".block_7 .drawer .proceed").fadeIn(500);
	}	
})


$(".close_c_sub .option").click(function(){
	if( $(".sp_block_4").is(":visible")){
		$(".minimal_c_sub").removeClass("selected")
		$(".minimal_c_sub .sub_o_1").removeClass("selected");
		$(".minimal_c_sub .sub_o_2").removeClass("selected");
		 $(".sp_block_4").hide();
		 $(".block_7 .drawer .proceed").fadeIn(500);
	}	
})


$(".mutual.o_sp:first-child .option").click(function(){
    if($(".mutual.o_sp:last-child .option").hasClass("selected")){
    	$(".mutual.o_sp:last-child .option").removeClass("selected");
        $(".mutual.o_sp:last-child").removeClass("selected");
    }
})
$(".mutual.o_sp:last-child .option").click(function(){
    if($(".mutual.o_sp:first-child .option").hasClass("selected")){
    	$(".mutual.o_sp:first-child .option").removeClass("selected");
        $(".mutual.o_sp:first-child").removeClass("selected");
    }
})
