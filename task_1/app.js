let inputTop = document.getElementById("top");
let inputBottom = document.getElementById("bottom");

function changeColor(){

    document.body.style.background = `linear-gradient(${inputTop.value}, ${inputBottom.value})`;
	 
}

document.getElementById("btn").onclick = changeColor;
