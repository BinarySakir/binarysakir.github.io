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
		$(".block_6").fadeOut(500);
	}
});


$(".option").click(function(){
	if($(this).parent().parent().parent().hasClass("block_2")){$(".block_2 .option").removeClass("selected");}
	if($(this).parent().parent().parent().hasClass("block_5")){$(".block_5 .option").removeClass("selected");}
	if($(this).parent().parent().parent().hasClass("block_chest_pain")){$(".block_chest_pain .option").removeClass("selected");}
	if($(this).parent().parent().parent().parent().hasClass("block_gender")){$(".block_gender .option").removeClass("selected");}
	if($(this).parent().parent().parent().hasClass("block_chest_pain")){$(".block_chest_pain .option").removeClass("selected");}
	if($(this).parent().parent().parent().hasClass("block_cardiac_hosp")){$(".block_cardiac_hosp .option").removeClass("selected");}
	if($(this).parent().parent().parent().hasClass("block_exp_chest_pain")){$(".block_exp_chest_pain .option").removeClass("selected");}
	// multi select for block_6
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

	$(".block_7 .option.none").removeClass("selected");

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
		if($(".block_7 .option.none").hasClass("selected")){
			$(".close_mini").hide();
			$(".block_7 .option").not(".block_7 .option.none").removeClass("selected")
		}
		if($(this).parent().parent().parent().hasClass("block_chest_pain_2") && $(this).hasClass("none") && $(this).hasClass("selected")){
			$(".block_chest_pain_2 .option").not(this).removeClass("selected");
		}

		if($(".block_2 .selected").text() === $(".block_2 .option:first-child").text() ){
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
		setTimeout(function(){$(".block_3").fadeIn(500); scrollTo(".block_3");}, 500)
	}
});


$(".block_2 .proceed").click(function(){
	if($(".block_2 .selected").length === 1){
		if($(".block_2 .selected").text() === $(".block_2 .option:first-child").text()){
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
			setTimeout(function(){$(".block_chest_pain").fadeIn(500); scrollTo(".block_chest_pain");}, 500)
		}
	}
});

$(".block_chest_pain .proceed").click(function(){
	if($(".block_chest_pain .selected").length === 1 && $(".block_chest_pain .selected").text() !==  $(".block_chest_pain .option").last().text()){
		$(".block_chest_pain .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_chest_pain_2").fadeIn(500); scrollTo(".block_chest_pain_2");}, 500)
	}else{
		$(".block_chest_pain .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_1").fadeIn(500); scrollTo(".block_1");}, 500)
	}
});

$(".block_chest_pain_2 .proceed").click(function(){
	if($(".block_chest_pain_2 .selected").length >= 1){
		$(".block_chest_pain_2 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_cardiac_hosp").fadeIn(500); scrollTo(".block_cardiac_hosp");}, 500)
	}
});

$(".block_cardiac_hosp .proceed").click(function(){
	if($(".block_cardiac_hosp .selected").length === 1){
		if($(".block_cardiac_hosp .option").first().hasClass("selected")){
			$(".block_cardiac_hosp .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_exp_chest_pain").fadeIn(500); scrollTo(".block_exp_chest_pain");}, 500)
		}else{
			$(".block_cardiac_hosp .drawer .proceed").fadeOut(500);
			setTimeout(function(){$(".block_1").fadeIn(500); scrollTo(".block_1");}, 500)
		}
	}
});

$(".block_exp_chest_pain .proceed").click(function(){
	if($(".block_exp_chest_pain .selected").length === 1){
		$(".block_exp_chest_pain .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_1").fadeIn(500); scrollTo(".block_1");}, 500)
	}
});

$(".block_3 .proceed").click(function(){
	if($(".block_3 .selected").length >= 1){
		if($(".temp-trigger").hasClass("selected")){
			$(".temp-trigger").css("font-weight", "400");
			if($(".block_3 ._follow_up").hasClass("selected")){
				$(".block_3 .drawer .proceed").fadeOut(500);
				setTimeout(function(){$(".cough_follow_up").fadeIn(500); scrollTo(".cough_follow_up");}, 500);
			}else{
				$(".block_3 .drawer .proceed").fadeOut(500);
				setTimeout(function(){$(".block_4").fadeIn(500); scrollTo(".block_4");}, 500);
			}
		}
		else{
			$(".temp-trigger").addClass("selected");
		}
		
	}
});

$(".cough_follow_up .proceed").click(function(){
	if($(".cough_follow_up .selected").length >= 1){
		$(".cough_follow_up .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_4").fadeIn(500); scrollTo(".block_4");}, 500)
	}
});


$(".block_4 .proceed").click(function(){
	if($(".block_4 .selected").length >= 1){
		$(".block_4 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_5").fadeIn(500); scrollTo(".block_5");}, 500)
	}
});

$(".block_5 .proceed").click(function(){
	if($(".block_5 .selected").length >= 1){
		$(".block_5 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_6").fadeIn(500); scrollTo(".block_6");}, 500)
	}
});

$(".block_6 .proceed").click(function(){
	if($(".block_6 .selected").length >= 1){
		$(".block_6 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".block_7").fadeIn(500); scrollTo(".block_7");}, 500)

	}
});


$(".block_7 .proceed").click(function(){
	if($(".block_7 .selected").length >= 1){
		$(".block_7 .drawer .proceed").fadeOut(500);
		setTimeout(function(){$(".info").fadeIn(500); scrollTo(".info");}, 500);
		// then move to response
	}
});


$(".block_7 .mutual.o_sp:first-child .option").click(function(){
    if($(".block_7 .mutual.o_sp:last-child .option").hasClass("selected")){
    	$(".block_7 .mutual.o_sp:last-child .option").removeClass("selected");
        $(".block_7 .mutual.o_sp:last-child").removeClass("selected");
    }
});
$(".block_7 .mutual.o_sp:last-child .option").click(function(){
    if($(".block_7 .mutual.o_sp:first-child .option").hasClass("selected")){
    	$(".block_7 .mutual.o_sp:first-child .option").removeClass("selected");
        $(".block_7 .mutual.o_sp:first-child").removeClass("selected");
    }
});

$(".cough_follow_up .mutual.o_sp:first-child .option").click(function(){
    if($(".cough_follow_up .mutual.o_sp:last-child .option").hasClass("selected")){
    	$(".cough_follow_up .mutual.o_sp:last-child .option").removeClass("selected");
        $(".cough_follow_up .mutual.o_sp:last-child").removeClass("selected");
    }
});
$(".cough_follow_up .mutual.o_sp:last-child .option").click(function(){
    if($(".cough_follow_up .mutual.o_sp:first-child .option").hasClass("selected")){
    	$(".cough_follow_up .mutual.o_sp:first-child .option").removeClass("selected");
        $(".cough_follow_up .mutual.o_sp:first-child").removeClass("selected");
    }
});



var data = [];   // this will container all the selected data, format given at the end

$("form").submit(function(e){
	e.preventDefault();  // for demo only
	$(".conv-grp").each(function(index){
		var eachBlock = [];
		var eachBlockAnswers = [];
		eachBlock.push($(this).find(".text").text());
		$(this).find(".selected").not(".o_sp").not(".sub_option .option").each(function(){
			// the if-else condition below is new
			if($(this).hasClass("temp-trigger")){
				var tempFever = ["Fever", $(this).parent().parent().find("#range-control").val()];
				eachBlockAnswers.push(tempFever);
			}else{
				eachBlockAnswers.push($(this).text().trim());
			}
		});
		$(this).find(".selected.o_sp").each(function(){
			var eachBlockMultiAnswers = [];
			eachBlockMultiAnswers.push($(this).children("div:first").text().trim());
			$(this).find(".option.selected").each(function(){
				eachBlockMultiAnswers.push($(this).text().trim());
			})
			eachBlockAnswers.push(eachBlockMultiAnswers);
		});
		eachBlock.push(eachBlockAnswers);
		data.push(eachBlock);
	});
	console.log(data);
});


// array format

// [

// 	["Your gender?", ["Female"] ],
// 	["Your age?", ["18-64"] ],
// 	["Are you experiencing any of these problems?", [ ["Difficulty breathing", "Severe"] ] ],
// 	["Are you experiencing any of these symptoms?", [ "Sore throat", ["Cough", "Severe"] ] ],
// 	-----------------------------------------------------------------------------------------
// 	[	"question",
// 		["answer_1", "answer_2",
// 			["Option With Multiple Options", "One of the Multiple Options", "Another of the Multiple Options"]
// 		]

// 	]
// ]