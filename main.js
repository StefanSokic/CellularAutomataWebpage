console.log("hey");

for (var i = 0; i < 2000; i++) {
	var square = document.createElement("div");
	square.className = "square";
	document.body.appendChild(square);
}