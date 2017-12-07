function clickcollege(){
  location.replace("college.html")
}

function clickhigh(){
	location.replace("high.html")
}

function clickmiddle(){
	location.replace("middle.html")
}

function clickelementary(){
	location.replace("elementary.html")
}

function clickking(){
	location.replace("king.html")
}

function myFunction(){
	var x = document.getElementById("intro");
	if (x.style.display === "block"){
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}