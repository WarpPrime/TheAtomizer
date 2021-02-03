var hadron00 = 0;



function updateText() {
	document.getElementById("electronvolts").innerHTML = electronvolts.toFixed();
	document.getElementById("est_electronvolts").innerHTML = nFormatter(electronvolts, 3);

	document.getElementById("gluons").innerHTML = gluons.toFixed();
	document.getElementById("electrons").innerHTML = electrons.toFixed();

	document.getElementById("up_quarks").innerHTML = upQuarks.toFixed();
	document.getElementById("down_quarks").innerHTML = downQuarks.toFixed();

	document.getElementById("charm_quarks").innerHTML = charmQuarks.toFixed();
	document.getElementById("strange_quarks").innerHTML = strangeQuarks.toFixed();

	document.getElementById("top_quarks").innerHTML = topQuarks.toFixed();
	document.getElementById("bottom_quarks").innerHTML = bottomQuarks.toFixed();

	document.getElementById("protons").innerHTML = protons.toFixed();
	document.getElementById("neutrons").innerHTML = neutrons.toFixed();

	if (document.getElementById("hadrons").style.display == "none" && hadron00 == 0 && upQuarks >= 3 && downQuarks >= 3) {
		hadron00 = 1;
		flicker("hadrons");
		document.getElementById("toggleHadrons").style.display = "block";
		document.getElementById("toggleHadrons").className = "collapsible active";
		document.getElementById("hadrons").style.maxHeight = 10000;
	}

}
