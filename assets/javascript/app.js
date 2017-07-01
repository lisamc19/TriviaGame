var total_seconds = 18*10;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);
function CheckTime(){
	document.getElementById("quiz-time-left").innerHTML
	='Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ' ;
	if(total_seconds <=0){
	setTimeout('document.quiz.submit()',1);
	return
	} else{
		total_seconds = total_seconds -1;
		c_minutes = parseInt(total_seconds/60);
		c_seconds = parseInt(total_seconds%60);
	setTimeout("CheckTime()",1000);
	}
}
	setTimeout("CheckTime()",1000);

function check (){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var correct = 0;
	if (question1 == "Providence") {
		correct++;
}
	if (question2 =="Daniel Radcliffe"){
		correct++;
}
	if (question3 == "June 21"){
		correct++;
}
	if (question4 == "Mike Pence"){
		correct++;
}
	if(question5 == "8 ft 11.1 in"){
		correct++;
}
	if(question6 == "31"){
		correct++;
}
	if(question7 == "March 17"){
		correct++;
}
	if(question8== "Bill Gates"){
		correct++;
	}
document.getElementById("after_submit").style.visibility= "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}

function onDoneButtonClick (){
	return total_seconds = 0;
}

document.getElementById("button").on("click", function(){
	onDoneButtonClick()
})
