var colors = generateRandomColors(6);

var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");


colorDisplay.innerHTML = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			alert("Correct!");
			messageDisplay.innerHTML = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.innerHTML = "Try again";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}

function generateRandomColors(num) {
	var colorsArray = [];

	for(var i = 0; i < num; i++){
		colorsArray.push(randomColor());
	}
	return colorsArray;
}


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + " " + g + ", " + b + ")";
}