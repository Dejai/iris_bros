document.getElementById("expander").addEventListener("click", expand);
document.getElementById("collapser").addEventListener("click", collapse);

function expand(){
	var elements = document.getElementsByClassName("expand-container");
	console.log(elements);
	document.getElementById("expander").classList.remove("selectedOption");
	document.getElementById("expander").blur();
	document.getElementById("collapser").classList.add("selectedOption");
	for (var x = 0; x < elements.length; x++){
		elements[x].querySelectorAll("expand-control")[0].classList.add("expanded");
		//elements[x].childNodes[0].childNodes[0].classList.add("expanded");
		//elements[x].childNodes[1].classList.remove("expand-hidden");	
		elements[x].querySelectorAll("expand-hidden")[0].classList.remove("epxand-hidden");
	}
}
function collapse(){
	var elements = document.getElementsByClassName("expand-container"); 
	console.log(elements);
	document.getElementById("expander").classList.add("selectedOption");
	document.getElementById("collapser").classList.remove("selectedOption");
	document.getElementById("collapser").blur();
	for (var x = 0; x < elements.length; x++){ 
		elements[x].childNodes[0].childNodes[0].classList.remove("expanded");
		elements[x].childNodes[1].classList.add("expand-hidden");
	}
}
