// sample.json in compact format
$( document ).ready(function() {
	// var data = JSON.parse('{"quantity":4,"messages":[["Hi!", "What a nice sunny day!"],"M2","",["M3_1","M3_2"]],"questions":["In the last 14 days, what is your exposure to others who are known to have COVID-19?","Q2","Q3","Q4"],"options":[["I live with someone who has COVID-19", "I\'ve had close contact with someone who has COVID-19", "I\'ve been near someone who has COVID-19", "I\'ve had no exposure"],["O2_1", "O2_2", "O2_3"],["O3_1", "O3_2", "O3_3"],["O4_1, 04_2, O4_3"]]}');
	var data = JSON.parse('{"quantity":4,"messages":[["Hi!","Welcome to our chat bot. Let\'s begin by asking some questions."],"Thank you.","Thanks.",""],"questions":["Do you live or work in care facility?","In the last 14 days, what is your exposure to others who are known to have COVID-19?","In the last 14 days, have you traveled internationally?","How old are you?"],"options":[["I live in a long-term care facility","I\'ve worked in a hospital or other care facility in the past 14 days","I plan to work in a hospital or other care facility in the next 14 days","No, I don\'t live or work in a care facility"],["I live with someone who has COVID-19","I\'ve had close contact with someone who has COVID-19","I\'ve been near someone who has COVID-19","I\'ve had no exposure"],["I have traveled internationally","I have not traveled internationally"],["Under 18","Between 18 and 64","65 or above"]]}');
	var q = data["quantity"];
	function fun(i, callback) {
		var m = data["messages"][i];
		var ques = data["questions"][i];
		var o = data["options"][i];
		$("body").append("<div class='conv-grp cg" + String(i+1) + "'>");
		$(".cg" + String(i+1)).append('<img src="avatar.svg" height="40" width="40">');
		$(".cg" + String(i+1)).append("<div class='conv'>");
		if(data["messages"][i]){
			if(Array.isArray(m)){
				for(var j = 0; j < m.length; j++){
					$(".cg" + String(i+1) + " .conv").append("<div class='text'>" + m[j] + "</div><br>");
				}
			}else{
				$(".cg" + String(i+1) + " .conv").append("<div class='text'>" + m + "</div><br>");
			}
		}
		$(".cg" + String(i+1) + " .conv").append("<div class='text'>" + ques + "</div><br>");
		var s ="";
		for(var k = 0; k < o.length; k++){
			s = s + "<div class='option'>" + o[k] + "</div>"
		}
		s  = s + "<div class='proceed'>Proceed</div>"
		var drawer = "<div class='drawer d" + String(i+1) + "'>" + s + "</div>";
		$("body").append(drawer);
		$(".option").click(function(){
			$(this).toggleClass("selected");
		});
		$(".proceed").click(function(){
			var s_options = [];
			$(".selected").each( function(a){
			  s_options.push($(".selected").eq(a).text());                     
			});
			console.log(s_options);
			$(".drawer").addClass("slideoff").fadeOut(500);
			setTimeout(function(){$(".drawer").remove();}, 500);
			$("body").append("<div class='conv-grp right rmsg" + String(i+1) + "'>");
			$(".rmsg" + String(i+1)).append("<div class='conv'>");
			for(var l = 0; l < s_options.length; l++){
				$(".rmsg" + String(i+1) + " .conv").append("<div class='text'>" + s_options[l] + "</div><br>");
			}
			callback();
		});
	}// }

	// hehehe

	fun(0, function(){
		setTimeout(function(){
			fun(1, function(){
				setTimeout(function(){
					fun(2, function(){
						setTimeout(function(){
							fun(3);
						}, 500);
					});
				}, 500);
			});
		}, 500);
	});
	
});

