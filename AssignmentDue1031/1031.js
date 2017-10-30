var myAudio = new Audio();
myAudio.src = "bgm1.mp3";
function PlaySound(){
	myAudio.play();
}
function PauseSound(){
	myAudio.pause();
}


function choice3(){
	var c3 = prompt("Good Choice!", "Your name?");
	if (c3 != null){
		document.getElementById("c3after").innerHTML =
		"Welcome," + c3 + "! Nice to meet you!";
	}
}

function choice4(){
	var c4 = prompt("Nice Choice again!", "Your name?");
	if (c4 != null){
		document.getElementById("c3after").innerHTML =
		"Welcome," + c4 + "! Nice to meet you!";
	}
}

function go5(){
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}