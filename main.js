
for (var i = 0; i < 5500; i++) {
	var square = document.createElement("div");
	if (binaryRand() == 0) {
		square.className = "square";
	} else {
		square.className = "square-active";
	}
	document.body.appendChild(square);
}

function binaryRand() {
	return Math.round(Math.random());
}