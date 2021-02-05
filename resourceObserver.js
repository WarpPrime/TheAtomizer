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

	document.getElementById("darkMatter").innerHTML = nFormatter(darkMatter, 3, "foo");

	document.getElementById("cosmicString").innerHTML = cosmicStrings.toFixed();
	document.getElementById("stringCost").innerHTML = stringCost.toFixed();

	document.getElementById("hTweaks").innerHTML = hTweaks.toFixed();
	document.getElementById("hBarCost").innerHTML = hBarCost.toFixed();

	if (document.getElementById("hadrons").style.display == "none" && hadron00 == 0 && upQuarks >= 3 && downQuarks >= 3) {
		hadron00 = 1;
		flicker("hadrons");
		document.getElementById("toggleHadrons").style.display = "block";
		document.getElementById("toggleHadrons").className = "collapsible active";
		document.getElementById("hadrons").style.maxHeight = 10000;
	}

}

var playBarReward = 0;

class Clock {
	tick() {
		var a = document.getElementById("playTime")
		var bar = document.getElementById("playBar")
		gameTime = gameTime + 0.1;

		if (a.innerHTML === "10 minutes" && ((Math.round(gameTime * 10) / 10) % 6) == 0 && Number(bar.style.width.replace('%','')) <= 100) {
			if (Number(bar.style.width.replace('%','')) <= 99) {
				set("playBar",gameTime/6);
			}
			else {
				if (playBarReward == 0) {
					achievementGet("Play for 10 minutes", "electronvolts", 1e9);
					playBarReward = playBarReward + 1;
				}
				bar.style.width = "100%";
				bar.innerHTML = "100%";
			}
		}
	}

}

var clock = new Clock();

var clockTick = setInterval(clock.tick, 100);

class Research {
	science() {
		if (cosmicStrings > 0) {
			darkMatter = darkMatter + (0.1 * (0.1 * cosmicStrings));
		}
		updateText();
	}

}

var research = new Research();

var researchScience = setInterval(research.science, 100);
