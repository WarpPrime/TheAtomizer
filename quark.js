class Quark {
	Quark() {
  	

	gluons = gluons + 1; // 0 eV (massless)
	electrons = electrons + 1; // 510.998 950 eV

	var a = Math.floor(101 * Math.random());
	if (a >= 0 && a <= 48) {
		upQuarks = upQuarks + 1; // 2.16 MeV
	}
	else if (a >= 49 && a <= 96) {
		downQuarks = downQuarks + 1; // 4.68 MeV
	}
	else if (a == 97) {
		charmQuarks = charmQuarks + 1; // 1.2718 GeV or 1271.8 MeV
	}
	else if (a == 98) {
		strangeQuarks = strangeQuarks + 1; // 93.6 MeV
	}
	else if (a == 99) {
		topQuarks = topQuarks + 1; // 172.76 GeV or 172 760 MeV
	}
	else if (a == 100) {
		bottomQuarks = bottomQuarks + 1; // 4.183 GeV or 4183 MeV
	}
	
	updateText();


	}

	QuarkDecay() {
  	

	var a = Math.floor(10 * Math.random())

	if (a == 0) {
		a = Math.floor(100 * Math.random())
		if (a <= 94 && charmQuarks > 0) {
			strangeQuarks = strangeQuarks + Math.ceil(charmQuarks / 2);
			charmQuarks = charmQuarks - Math.ceil(charmQuarks / 2);
			electronvolts = electronvolts + 1178200000; // 1 178 200 000 eV
		}
		else if (a >= 95 && charmQuarks > 0) {
			downQuarks = downQuarks + Math.ceil(charmQuarks / 2);
			charmQuarks = charmQuarks - Math.ceil(charmQuarks / 2);
			electronvolts = electronvolts + 1267120000; // 1 267 120 000 eV
		}
	}

	a = Math.floor(10 * Math.random())

	if (a == 0 && strangeQuarks > 0) {
		upQuarks = upQuarks + Math.ceil(strangeQuarks / 2);
		strangeQuarks = strangeQuarks - Math.ceil(strangeQuarks / 2);
		electronvolts = electronvolts + 91440000; // 91 440 000 eV
	}


	a = Math.floor(10 * Math.random())

	if (a == 0) {
		a = Math.floor(101 * Math.random())
		if (a <= 49 && bottomQuarks > 0) {
			charmQuarks = charmQuarks + Math.ceil(bottomQuarks / 2);
			bottomQuarks = bottomQuarks - Math.ceil(bottomQuarks / 2);
			electronvolts = electronvolts + 2911200000; // 2 911 200 000 eV
		}
		else if (a >= 50 && a <= 99 && bottomQuarks > 0) {
			upQuarks = upQuarks + Math.ceil(bottomQuarks / 2);
			bottomQuarks = bottomQuarks - Math.ceil(bottomQuarks / 2);
			electronvolts = electronvolts + 4180840000; // 4 180 840 000 eV
		}
		else if (electronvolts >= 172755817000) { // 172 755 817 000 eV
			topQuarks = topQuarks + Math.ceil(bottomQuarks / 2);
			bottomQuarks = bottomQuarks - Math.ceil(bottomQuarks / 2);
			electronvolts = electronvolts - 168577000000; // -168 577 000 000 eV
		}
	}
	

	a = Math.floor(10 * Math.random())

	if (a == 0) {
		a = Math.floor(100000 * Math.random())
		if (a <= 99800 && topQuarks > 0) {
			topQuarks = topQuarks - Math.ceil(topQuarks / 2);
			bottomQuarks = bottomQuarks + Math.ceil(topQuarks / 2);
			electronvolts = electronvolts + 168577000000; // 168 577 000 000 eV
		}
		else if (a >= 99801 && a <= 99970 && topQuarks > 0) {
			strangeQuarks = strangeQuarks + Math.ceil(topQuarks / 2);
			topQuarks = topQuarks - Math.ceil(topQuarks / 2);
			electronvolts = electronvolts + 172666400000; // 172 666 400 000 eV
		}
		else if (a >= 99971 && topQuarks > 0) {
			topQuarks = topQuarks + Math.ceil(topQuarks / 2);
			downQuarks = downQuarks - Math.ceil(topQuarks / 2);
			electronvolts = electronvolts + 172755320000; // 172 755 320 000 eV
		}
	}

	updateText();

	}
}

var q = new Quark();

var qGen = setInterval(q.Quark, 500);

var qDecay = setInterval(q.QuarkDecay, 100);