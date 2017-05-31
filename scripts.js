var colors = generateRandomColors(6);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var reset = document.getElementById("new");

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

easy.addEventListener("click", function(){
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for(var i = 0; i < 3; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	for(i; i < squares.length; i++){
		squares[i].style.visibility = "hidden";
	}
	h1.style.backgroundColor = "#232323";
	messageDisplay.innerHTML = "";
})

reset.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	#messageDisplay.innerHTML = "";
})

hard.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.visibility = "visible";
	}
	h1.style.backgroundColor = "#232323";
	#messageDisplay.innerHTML = "";
})


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + " " + g + ", " + b + ")";
}
