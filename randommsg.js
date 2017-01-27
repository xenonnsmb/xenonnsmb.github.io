// generate random crap for the footer on each page
var	messages = Array(11);
messages[0] = "glitch in the matrix";
messages[1] = "be sure to drink your ovaltine";
messages[2] = "we\'ll do it live";
messages[4] = "memes are life";
messages[5] = "nothing cannot be hacked";
messages[6] = "why are you reading this";
messages[7] = "no";
messages[8] = "yes";
messages[9] = "there is water here";
messages[10] = "praise helix";
messages[11] = "only cheaters look in the javascript for the full list of messages, and you\'re a cheater"
function generate() {
	var msg = messages[Math.floor(Math.random() * 10)];
	document.getElementById("gentext").innerHTML = msg;
}
generate(); // the first one is free