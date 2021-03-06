var game = {};
var gameLoad = {};

function getGame() {
	game = {
		gameTime: gameTime,

		hadrons: document.getElementById("hadrons").style.display,

		H1show: document.getElementById("H1").style.display,
		H2show: document.getElementById("H2").style.display,

		electronvolts: electronvolts,
		gluons: gluons,
		electrons: electrons,
		upQuarks: upQuarks,
		downQuarks: downQuarks,
		charmQuarks: charmQuarks,
		strangeQuarks: strangeQuarks,
		topQuarks: topQuarks,	
		bottomQuarks: bottomQuarks,
		protons: protons,
		neutrons: neutrons,

		darkMatter: darkMatter,

		cosmicStrings: cosmicStrings,
		stringCost: stringCost,

		hTweaks: hTweaks,
		hBarCost: hBarCost,

		creationRate: creationRate
	};
}

function loadGame() {
	gameLoad = JSON.parse(localStorage.getItem("saveGame"));

	game = gameLoad;
	console.log(game);
	
	gameTime = game.gameTime;

	document.getElementById("toggleHadrons").style.display = game.hadrons;
	document.getElementById("hadrons").style.display = game.hadrons;

	document.getElementById("toggleAtoms").style.display = game.H1show;
	document.getElementById("toggleHydrogen").style.display = game.H1show;
	document.getElementById("hydrogen").style.display = game.H1show;
	document.getElementById("H1").style.display = game.H1show;
	document.getElementById("H2").style.display = game.H2show;

	hadron00 = game.hadron00;

	electronvolts = game.electronvolts;

	gluons = game.gluons;
	electrons = game.electrons;
	upQuarks = game.upQuarks;
	downQuarks = game.downQuarks;
	charmQuarks = game.charmQuarks;
	strangeQuarks = game.strangeQuarks;
	topQuarks = game.topQuarks;
	bottomQuarks = game.bottomQuarks;

	protons = game.protons;
	neutrons = game.neutrons;

	darkMatter = game.darkMatter;

	cosmicStrings = game.cosmicStrings;
	stringCost = game.stringCost;

	hTweaks = game.hTweaks;
	hBarCost = game.hBarCost;

	creationRate = game.creationRate;

	qGen = setInterval(q.Quark, Math.round(1000/creationRate));
}

function confirmLoad() {
	var ans = confirm("Load previous save? Cancel will wipe the previous save and create a new game.");
	
	if (ans) {
		loadGame();
	}
	else {
		localStorage.removeItem('saveGame');
	}
	setTimeout(function(){ fadeOutEffect(); }, 3000);

}


class Save {
	save() {
		getGame();
		localStorage.setItem("saveGame",JSON.stringify(game));
		console.log("Game saved")
		saveNotif();
	}

}

var save = new Save();

var saving = setInterval(save.save, 15000);
