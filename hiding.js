function hideAll() {
	document.getElementById("hadrons").style.display = "none";

	var divsToHide = document.getElementsByClassName("collapsible");
	for (var i = 0; i < divsToHide.length; i++) {
      		divsToHide[i].style.display = "none";
	}

	document.getElementById("H1").style.display = "none";
	document.getElementById("H2").style.display = "none";
}


function flicker(element) {
	var a = document.getElementById(element);

/*	if (a.previousSibling.previousSibling !== null && a.previousSibling.previousSibling !== undefined && a.previousSibling.previousSibling !== "#text") {	
		if ( a.previousSibling.previousSibling.className == "collapsible" ) {
			a.previousSibling.previousSibling.className = "collapsible active";
			a.previousSibling.previousSibling.style.display = "block";
			a.style.maxHeight = 10000;
		}

	}
*/

/*	var b = a.closest(".collapsible");
	alert(b);

	b.className = "collapsible active";
	b.style.display = "block";
	a.style.maxHeight = 10000; 
*/

	
	a.style.display = "block";
	setTimeout(function () {
		a.style.display = "none";
		setTimeout(function () {
			a.style.display = "block";
			setTimeout(function () {
				a.style.display = "none";
				setTimeout(function () {
					a.style.display = "block";
						setTimeout(function () {
							a.style.display = "none";
							setTimeout(function () {
								a.style.display = "block";
								setTimeout(function () {
									a.style.display = "none";
										setTimeout(function () {
										a.style.display = "block";
								}, 25);
							}, 25);
						}, 25);
					}, 25);
				}, 25);
			}, 50);
		}, 50);
	}, 50);


}