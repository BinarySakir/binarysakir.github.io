// sample.json in compact format
$( document ).ready(function() {
	var data = JSON.parse('{"quantity":4,"messages":[["Hi!", "What a nice sunny day!"],"M2","",["M3_1","M3_2"]],"questions":["In the last 14 days, what is your exposure to others who are known to have COVID-19?","Q2","Q3","Q4"],"options":[["O1_1, O1_2, O1_3"],["O2_1, O2_2, O2_3"],["O3_1, O3_2, O3_3"],["O4_1, 04_2, O4_3"]]}');
	var q = data["quantity"];
	for (var i = 0; i < q; i++){
		var m = data["messages"][i];
		var ques = data["questions"][i];
		$("body").append("<div class='conv-grp cg" + String(i+1) + "'>");
		$(".cg" + String(i+1)).append('<img src="avatar.svg" height="40" width="40">');
		$(".cg" + String(i+1)).append("<div class='conv'>");
		if(data["messages"][i]){
			if(Array.isArray(m)){
				for(var j = 0; j < m.length; j++){
					$(".cg" + String(i+1) + " .conv").append("<div class='text'>" + m[j] + "</div>");
				}
			}else{
				$(".cg" + String(i+1) + " .conv").append("<div class='text'>" + m + "</div>");
			}
		}
		$(".cg" + String(i+1) + " .conv").append("<div class='text'>" + ques + "</div>");
	}
});

