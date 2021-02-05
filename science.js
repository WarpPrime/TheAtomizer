function makeString() {
	if (darkMatter >= stringCost) {
		darkMatter = darkMatter - stringCost;
		cosmicStrings = cosmicStrings + 1;
		stringCost = Math.round(5 * Math.pow(1.1, cosmicStrings));
	}
}

function editHBar() {
	if (darkMatter >= hBarCost) {
		darkMatter = darkMatter - hBarCost;
		hTweaks = hTweaks + 1;
		hBarCost = Math.round(10 * Math.pow(1.1, hTweaks));
		creationRate = Array.from({length: (hTweaks+1)}, (_, i) => 1/(i + 1)).reduce((a, b) => a + b, 0);
		qGen = setInterval(q.Quark, Math.round(1000/creationRate));
	}

}
