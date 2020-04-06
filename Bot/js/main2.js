var block2 = "<div class=\"block_2\"><div class=\"conv-grp\"><img src=\"avatar.svg\" height=\"40\" width=\"40\"><div class=\"conv\"><div class=\"text\">How old are you?</div></div></div><div class=\"drawer\"><div class=\"option jhamela\">Under 18</div><div class=\"option\">18 - 64</div><div class=\"option\">65 or above</div><div class='proceed'>Proceed</div></div></div>";

$(".option").click(function(){
	$(this).toggleClass("selected");
});
$(".block_2, .block_3, .block_4, .block_5, .block_6, .block_7, .sp_1").hide();
$(".block_1 .proceed").click(function(){
	$(".selected").each( function(a){
		$(".block_1 .right .conv").append("<div class='text'>" + $(".selected").eq(a).text() +"</div><br>");
		$(".block_1 .drawer").addClass("slideoff").fadeOut(500);
	});
	$(".sp_1").show();
	$(".block_2").show();
});
$(".block_2 .proceed").click(function(){
	if($(".block_2 .selected").hasClass("jhamela")){
		$(".block_2 .conv-grp.left .conv").append("<div class='text'>This tool is intended for people who are at least 18 years old.</div><br>");
		$(".jhamela").removeClass("selected");
	}
	else if($(".block_2 .selected").text() === "18 - 64"){
		$(".block_2 .drawer").addClass("slideoff").fadeOut(500);
		$(".block_2 .right .conv").append("<div class='text'>" + $(".block_2 .selected").text() +"</div><br>");
		$(".block_3").show();
		$(".block_3 .proceed").click(function(){
			$(".block_3 .selected").each( function(a){
				$(".block_3 .right .conv").append("<div class='text'>" + $(".block_3 .selected").eq(a).text() +"</div><br>");
			});
			$(".block_3 .drawer").addClass("slideoff").fadeOut(500);
			$(".block_4").show();
		});
	}
	else{
		$(".block_2 .drawer").addClass("slideoff").fadeOut(500);
		$(".block_2 .right .conv").append("<div class='text'>" + $(".block_2 .selected").text() +"</div><br>");
		$(".block_4").show();
	}
});
$(".block_4 .proceed").click(function(){
	$(".block_4 .selected").each( function(a){
		$(".block_4 .right .conv").append("<div class='text'>" + $(".block_4 .selected").eq(a).text() +"</div><br>");
		$(".block_4 .drawer").addClass("slideoff").fadeOut(500);
	});
	$(".block_5").show();
});
$(".block_5 .proceed").click(function(){
	$(".block_5 .selected").each( function(a){
		$(".block_5 .right .conv").append("<div class='text'>" + $(".block_5 .selected").eq(a).text() +"</div><br>");
		$(".block_5 .drawer").addClass("slideoff").fadeOut(500);
	});
	$(".block_6").show();
});
$(".block_6 .proceed").click(function(){
	$(".block_6 .selected").each( function(a){
		$(".block_6 .right .conv").append("<div class='text'>" + $(".block_5 .selected").eq(a).text() +"</div><br>");
		$(".block_6 .drawer").addClass("slideoff").fadeOut(500);
	});
	$(".block_7").show();
});
// $(".block_4 .proceed").click(function(){



$(".sub_d").css("display","none");

$(".o_m_1").click(function(){
	$(".sub_d_1").css("display","");
	$(".sub_d_1 .option").click(function(){
		$(".sub_d_1").addClass("slideoff").fadeOut(500);
		setTimeout(function(){
			$(".sub_d_1").css("display", "none");
			$(".sub_d_1").removeClass("slideoff");
		}, 500);
	});
});

$(".o_m_2").click(function(){
	$(".sub_d_2").css("display","");
	$(".sub_d_2 .option").click(function(){
		$(".sub_d_2").addClass("slideoff").fadeOut(500);
		setTimeout(function(){
			$(".sub_d_2").css("display", "none");
			$(".sub_d_2").removeClass("slideoff");
		}, 500);
	});
});