
let ul = document.createElement("ul");
let li = document.createElement("li")
let div = document.querySelector("div");
let input = document.querySelector("input");
let btn = document.querySelector("button");
div.appendChild(ul);


function addProduct(e){
	e.preventDefault();
	if(input.value !== ""){
		ul.appendChild(li);
		li.innerText = input.value;
	} else return;    //podpatrzone z SP
input.value = "";  //SP
}

btn.onclick = addProduct;








