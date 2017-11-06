var triangle = ["△"];
document.getElementById("array1").innerHTML = triangle.join(" ")


function clickme1(){
	document.getElementById("length").innerHTML = triangle.push("△");
	document.getElementById("array1").innerHTML = triangle.join(" ")
}

function clickme2(){
	document.getElementById("length").innerHTML = triangle.push("▲");
	document.getElementById("array1").innerHTML = triangle.join(" ")
}