var splashTextArray = [
"Initializing Big Bang...",
"Creating dark energy...",
"Now with broken mechanics!"
]

function splash() {
	disableScroll();

	var splashText = splashTextArray[Math.floor(Math.random()*splashTextArray.length)];

	document.getElementById("splash").innerHTML = splashText;

	setTimeout(function () { confirmLoad(); }, 10);
}