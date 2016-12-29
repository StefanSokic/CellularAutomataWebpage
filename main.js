
for (var i = 0; i < 2000; i++) {
	var square = document.createElement("div");
	if (i % 3 == 0) {
		square.className = "square";
	} else {
		square.className = "square-active";
	}
	document.body.appendChild(square);
}