$('.sub_option').hide();
// $('.block_2, .block_3, .block_4, .sp_drawer_1, .sp_block_1').hide();
$('.obes').on('click', function(event) {        
	$('.sub_option').slideToggle();
});
$(".option").click(function(){
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
	$(".block_1 .drawer").fadeOut(500);
	if($(".block_1 .drawer .option").hasClass("selected")){
		$(".sp_block_1").fadeIn(500);
		$(".sp_drawer_1").fadeIn(500);
		$(".sp_drawer_1 .proceed").click(function(){
			if($(".sp_drawer_1 .option").hasClass("selected")){
				$(".sp_drawer_1").fadeOut();
				$(".block_2").fadeIn();
			}
		});
	}else{
		$(".block_2").fadeIn(500);
	}
});
$(".block_2 .proceed").click(function(){
	if($(".block_2 .selected").length === 1){
		if($(".block_2 .selected").text() === "Under 18"){
			$(".block_2.conv-grp .conv").append("<div class='text'>This tool is intended for people who are at least 18 years old.</div><br>");
			$(".block_2 .selected").removeClass("selected");
		}
		else{
			$(".block_2 .drawer").fadeOut(500);
			$(".block_3").fadeIn(500);
		}
	}
});

$(".block_3 .proceed").click(function(){
	if($(".block_3 .selected").length === 1 && $(".block_3 .selected").hasClass("none")){
		alert("None");
	}
	else{
		if($(".block_3 .selected").length >= 1){
			$(".block_3 .drawer").fadeOut(500);
			$(".block_4").fadeIn(500);
		}
	}
})