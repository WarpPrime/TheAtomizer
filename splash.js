var splashTextArray = [
"Initializing Big Bang...",
"Creating dark energy...",
"Now with broken mechanics!",
"Generating dark matter...",
"Uninstalling Windows...",
"Adding cheat codes...",
"Rearranging quarks...",
"Generating top quark...",
"Better than any other game!",
"Scroll locked!",
"Don't worry about losing your savegame!",
"Popup free!",
"Generating bad game...",
"Now in Alpha Dev!",
"Waiting for quarks to decay...",
"Achieving Planck energy...",
"Generating micro-black hole...",
"Removing bugs...",
"Running out of universe space...",
"Typoh free!",
"A latency of 100 years!",
"Compressing universe...",
"Splitting universe...",
"Decoupling photons...",
"Join our nonexistent Discord!",
"Energy deficit!",
"Changing gravitational constant...",
"Editing the h-bar...",
"Removing quantum fluctuations...",
"Misclicking button...",
"Doh!",
"This splash text will never appear - That's strange.",
// "Support me on Patreon!",
"Hacking save file...",
"Now CSS-free!",
"Created using block coding!",
"Decaying protons...",
"Initializing random event...",
"Play in fullscreen!",
"Procrastinating...",
]

function splash() {
	scroll(0,0);
	disableScroll();

	var splashText = splashTextArray[Math.floor(Math.random()*splashTextArray.length)];

	document.getElementById("splash").innerHTML = splashText;

	setTimeout(function () { confirmLoad(); }, 10);
}
