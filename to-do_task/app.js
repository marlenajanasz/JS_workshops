//let form = document.querySelector("form");
let ul = document.createElement("ul");
let div = document.querySelector("div");
let input = document.querySelector("input");
let btn = document.querySelector("button");
div.appendChild(ul);

/*function removeLi(e){
	e.target.parentNode.remove();  //SP
}*/

function addProduct(e){
	e.preventDefault();
	if(input.value !== ""){
		let li = document.createElement("li");  //kolejność z SP - li nie może być poza funkcją!
		let rmv = document.createElement("button");
		rmv.innerText = "usuń";
		li.innerText = input.value;
		ul.appendChild(li);
		li.append(rmv);
		rmv.onclick = removeLi;
			function removeLi(){
				ul.removeChild(li);
			}
	} else return;    
input.value = "";  

}

btn.onclick = addProduct;
//form.onsubmit = addProduct; //SP
