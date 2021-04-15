var url = "http://strony-dg.000webhostapp.com/testportal/get.php";
$(".logo_default").click(function() {
	var data = $("form").serializeArray();
	var question = $(".question_essence").html();
	console.log(data);
	var length = data.length;
	var answersArray = [data[3].value];
	if(length > 5) {
		for(i = 1; i < length - 4; i++) {
			answersArray.push(data[i+3].value);
		}
	}
	$.get(url, function(responseData, status){
		alert(responseData.answers[0]);
	});
		
	
	
	alert(CryptoJS.MD5(question) + "|" + answersArray.join(";"));
});
$( document ).ready(function () {
	$(".test-name-label").css("color", "red");
	$.get(url, function(responseData, status){
		$("label.question_answer_wrap").after("%");
		
		for(var i = 0; i < responseData.info.answers_count; i++) {
			var text =  responseData.answers[0+i].split("|");
			var item = $("label.question_answer_wrap[for=answer_"+text[0]+"]")
			item.css("color", "green");
			item.css("text-decoration", "underline");
			item.after(text[1]);
		}
	});
	
});
