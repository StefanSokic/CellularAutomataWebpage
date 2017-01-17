

var array = [];
// creating a 2d array
for (var row = 0; row < 200; row++) {
	var innerArray = [];
	for (var col = 0; col < 80; col++) {
		// the first row get's filled with random binary digits
		if (row == 0) {
			innerArray.push(binaryRand());
		} else { // the rest are filled based on the state of the row above it
			rule86(innerArray);
		}
	}
	array.push(innerArray);
}
// returns either a 1 or a 0 randomly
function binaryRand() {
	return Math.round(Math.random());
}
// decides the state of the current square based on the state of the one above it and it's siblings
function rule86(innerArray) {
			if (array[row - 1][col - 1] == 1 && array[row - 1][col] == 1 && array[row - 1][col + 1] == 1) {
				innerArray.push(0);
			} else if (array[row - 1][col - 1] == 1 && array[row - 1][col] == 1 && array[row - 1][col + 1] == 0) {
				innerArray.push(1);
			} else if (array[row - 1][col - 1] == 1 && array[row - 1][col] == 0 && array[row - 1][col + 1] == 1) {
				innerArray.push(0);
			} else if (array[row - 1][col - 1] == 1 && array[row - 1][col] == 0 && array[row - 1][col + 1] == 0) {
				innerArray.push(1);
			} else if (array[row - 1][col - 1] == 0 && array[row - 1][col] == 1 && array[row - 1][col + 1] == 1) {
				innerArray.push(0);
			} else if (array[row - 1][col - 1] == 0 && array[row - 1][col] == 1 && array[row - 1][col + 1] == 0) {
				innerArray.push(1);
			} else if (array[row - 1][col - 1] == 0 && array[row - 1][col] == 0 && array[row - 1][col + 1] == 1) {
				innerArray.push(1);
			} else if (array[row - 1][col - 1] == 0 && array[row - 1][col] == 0 && array[row - 1][col + 1] == 0) {
				innerArray.push(0);
			} else {
				innerArray.push(binaryRand());
			}
		
}
// create elements in the body and assign active or inactive states based on the array
for (var k = 0; k < array.length; k++) {
	for (var l = 0; l < array[k].length; l++) {
		var square = document.createElement("div");
		if (array[k][l] == 0) {
			square.className = "square-inactive";
		} else {
			square.className = "square-active";
		}
		document.body.appendChild(square);
	}
	var mybr = document.createElement('br');
	document.body.appendChild(mybr);	
}

