var i = 0;
function move(element, percent) {
	var elem = document.getElementById(element);
	var width = elem.style.width.replace('%','');
	var mem = width;
	var id = setInterval(frame, 10);
	function frame() {
		if (width >= Number(percent) + Number(mem)) {
			clearInterval(id);
    		} else {
      			width++;
	       		elem.style.width = width + "%";
			elem.innerHTML = width  + "%";
      		}
    	}
}

function set(element, percent) {
	var elem = document.getElementById(element);
	var width = elem.style.width.replace('%','');
	var mem = width;
	var id = setInterval(frame, 1);
	function frame() {
		if (width >= percent) {
			clearInterval(id);
    		} else {
      			width++;
	       		elem.style.width = width + "%";
			elem.innerHTML = width  + "%";
      		}
    	}
}

function reset(element) {
	var elem = document.getElementById(element);
	var width = elem.style.width.replace('%','');
	var mem = width;
	var id = setInterval(frame, 2);
	function frame() {
		if (width <= 0) {
			clearInterval(id);
    		} else {
      			width--;
	       		elem.style.width = width + "%";
			elem.innerHTML = width  + "%";
      		}
    	}

}