function makeProton() {
	var i = 0;
	var j = Math.floor(Math.random() * Math.floor(Math.random() * 50)) + 3;
	for (dummy = 0; dummy <= j; dummy++) {
		if (i > gluons || Math.floor(Math.random() * 10) === 0) { break; }
		i = i + 1;
	}
	
	if (Math.floor(Math.random() * 10) == 0 && electronvolts >= 929272000) {
		protons = protons + 1;
		upQuarks = upQuarks - 2;
		downQuarks = downQuarks - 1;
		gluons = gluons - i;
		electronvolts = electronvolts - 929272000; // 929 272 000 eV
	}
	else if (electronvolts >= 232318000) {
		gluons = gluons - Math.floor(gluons / 4);
		electronvolts = electronvolts - 232318000; // 232 318 000
	}
	else {
		gluons = gluons - Math.floor(gluons / 4);
	}

	updateText();
	Hshow();

}

function makeNeutron() {
	var i = 0;
	var j = Math.floor(Math.random() * Math.floor(Math.random() * 50)) + 3;
	for (dummy = 0; dummy <= j; dummy++) {
		if (i > gluons || Math.floor(Math.random() * 10) === 0) { break; }
		i = i + 1;
	}
	
	if (Math.floor(Math.random() * 10) == 0 && electronvolts >= 928045000) {
		neutrons = neutrons + 1;
		upQuarks = upQuarks - 1;
		downQuarks = downQuarks - 2;
		gluons = gluons - i;
		electronvolts = electronvolts - 928045000; // 928 045 000 eV
	}
	else if (electronvolts >= 232011250) {
		gluons = gluons - Math.floor(gluons / 4);
		electronvolts = electronvolts - 232011250; // 232 011 250
	}
	else {
		gluons = gluons - Math.floor(gluons / 4);
	}

	updateText();
	Hshow();

}

var H1show = 0;
var H2show = 0;

function Hshow() {
	if (H1show == 0 && protons >= 1) {
		H1show = 1;
		flicker("H1");
		document.getElementById("toggleAtoms").style.display = "block";
		document.getElementById("toggleAtoms").className = "collapsible active";
		document.getElementById("atoms").style.maxHeight = 10000;
		document.getElementById("toggleHydrogen").style.display = "block";
		document.getElementById("toggleHydrogen").className = "collapsible2 active";
		document.getElementById("hydrogen").style.maxHeight = 10000;
	}
	if (H2show == 0 && protons >= 1 && neutrons >= 1) {
		H2show = 1;
		flicker("H2");
	}
}