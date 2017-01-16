
//using rule 73

for (var i = 0; i < 81; i++) {
	var square = document.createElement("div");
	if (binaryRand() == 0) {
		square.className = "square-inactive";
	} else {
		square.className = "square-active";
	}
	document.body.appendChild(square);
}

function binaryRand() {
	return Math.round(Math.random());
}

// 2d array approach

/*  - create a 80x200 2d array
	- the first row is randomly generated
	- all following rows take shape based on the rows above them
	- use the .map() function to append it all to the body
*/

var array = [];
for (var row = 0; row < 200; row++) {
	var innerArray = [];
	for (var col = 0; col < 80; col++) {
		// the first row get's filled with random binary digits
		if (row == 0) {
			innerArray.push(binaryRand());
		} else { // the rest are filled based on the state of the row above it
			if (array[row-1][col] == 1) {
				innerArray.push("cell above is a 1");
			} else {
				innerArray.push("cell above is a 0");
			}
		}
	}
	array.push(innerArray);
}

console.log(array);

