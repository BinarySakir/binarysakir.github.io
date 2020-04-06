// sample.json in compact format
$( document ).ready(function() {
	var data = JSON.parse('{"quantity":4,"messages":[["Hi!","Welcome to our chat bot. Lets begin by asking some questions."],"","",""],"questions":["Are you experiencing any of these problems?","How old are you?","Are you experiencing any of these problems?","Do you have any of these conditions?","Have you travelled internationally?","In the last 14 days, have you been in an area where COVID-19 is widespread?","Tell us your exposure to covid-19 cases"],"options":[["Severe chest pain","Severe Disorientation","Constant chest pain","Difficulty breathing","Constant lightheadedness","None"],["Under 18","18 - 64","65 or above"],["Fever or sweating","Difficulty breathing","Sore throat","New & worsening cough","Vomiting/ diarrhea","None of the above"],["Asthma","Chronic lung disease","Diabetes","Pregnant?","Kidney failure",["Obesity","Extreme","Moderate"],"Liver Cirrhosis","Weakened immune system",["Heart Failure", "Congestive", "Not Congestive"],"Disease that makes you cough","Disease that makes you harder to cough"],["Yes","No"],["I live in an area where COVID-19 is widespread","I have visited an area where COVID-19 is widespread","I don’t know","None of the above"],["I live with COVID-19 patient","Close Contact (10 mins & above)","Close Contact (6 feet and sneezed on)","Minimal contact with a COVID 19 patient (6 feet away)","Minimal contact with a COVID 19 patient (Not coughed or sneezed one)"]],"answers":["You should call 911. Based on your reported symptoms, you should seek care immediately.",["This tool is intended for people who are at least 18 years old","18-64","65"]]}');
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
		$('html, body').animate({
			scrollTop: $(".cg" + String(i+1) + " .conv").offset().top
		}, 2000);


		var sub = "";
		var s ="";
		for(var k = 0; k < o.length; k++){
			if(Array.isArray(o[k])){
				sub = sub + "<div class='option o_m om" + String(k) + "'>" + o[k][0] + "</div>";
				for(var z = 1; z < o[k].length; z++){
					sub += "<div class='option'>" + o[k][z] + "</div>"
				}
			}
			else{s = s + "<div class='option'>" + o[k] + "</div>";}
		}
		s  = s + "<div class='drawer sub_d'>" + sub + "</div><div class='proceed'>Proceed</div>";
		var drawer = "<div class='drawer d" + String(i+1) + "'>" + s + "</div>";
		$("body").append(drawer);

		$(".sub_d").css("display","none");
		$(".o_m").click(function(){
			$(".sub_d").css("display","");
			$(".sub_d .option").click(function(){
				$(".sub_d").addClass("slideoff").fadeOut(500);
				setTimeout(function(){
					$(".sub_d").css("display", "none");
					$(".sub_d").removeClass("slideoff");
				}, 500);
			});
		});

		$(".option").click(function(){
			$(this).toggleClass("selected");
		});
		$(".proceed").click(function(){
			var s_options = [];
			$(".selected").each( function(a){
			  s_options.push($(".selected").eq(a).text());                     
			});
			$(".drawer").addClass("slideoff").fadeOut(500);
			setTimeout(function(){$(".drawer").remove();}, 500);
			$("body").append("<div class='conv-grp right rmsg" + String(i+1) + "'>");
			$(".rmsg" + String(i+1)).append("<div class='conv'>");
			for(var l = 0; l < s_options.length; l++){
				$(".rmsg" + String(i+1) + " .conv").append("<div class='text'>" + s_options[l] + "</div><br>");
			}
			if(i == 0 && s_options.includes("None") == false){

				$("body").append("<div class='conv-grp cg_sp_1'>");
				$(".cg_sp_1").append('<img src="avatar.svg" height="40" width="40">');
				$(".cg_sp_1").append("<div class='conv'>");
				$(".cg_sp_1 .conv").append("<div class='text'>" + "You should call 911." + "</div><br>");
			}
			if(i === 1){
				if($(".rmsg" + String(i+1) + " .conv .text").text() === "Under 18"){
					$("body").append("<div class='conv-grp cg_sp_2'>");
					$(".cg_sp_2").append('<img src="avatar.svg" height="40" width="40">');
					$(".cg_sp_2").append("<div class='conv'>");
					$(".cg_sp_2 .conv").append("<div class='text'>" + "This tool is intended for people who are at least 18 years old." + "</div><br>");
				}else{callback();}
			}else{
				callback();
			}
			
		});
	}// }

	// hehehe
	// fun(0, function(){
	// 	setTimeout(function(){
	// 		fun(1, function(){
	// 			if($(".rmsg2 .conv .text").text() === "65 or above"){
	// 				setTimeout(function(){
	// 					fun(3, function(){
	// 						setTimeout(function(){
	// 							fun(4, function(){
	// 								setTimeout(function(){
	// 									fun(5);
	// 								}, 500);
	// 							});
	// 						}, 500);
	// 					});
	// 				}, 500);
	// 			}
	// 			else{
	// 				setTimeout(function(){
	// 					fun(2, function(){
	// 						setTimeout(function(){
	// 							fun(3, function(){
	// 								setTimeout(function(){
	// 									fun(4, function(){
	// 										setTimeout(function(){
	// 											fun(5);
	// 										}, 500);
	// 									});
	// 								}, 500)
	// 							});
	// 						}, 500);
	// 					});
	// 				}, 500);
	// 			}
	// 		});
	// 	}, 500);
	// });
	fun(3);	
});

