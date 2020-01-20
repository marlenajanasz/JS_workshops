const inputTop = document.getElementById("top");
const inputBottom = document.getElementById("bottom");

/*const nameTop = inputTop.getAttribute("name");
const nameBottom = inputBottom.getAttribute("name");*/

const valueTop = inputTop.getAttribute("value");
const valueBottom = inputBottom.getAttribute("value");

funkcja1(bottom, top){

  if(bottom !== '') && (top !==''){  
  		document.body.background = linear-gradient(bottom, top);
	} 
}

funkcja2(){


  funkcja1(valueBottom, valueTop);

} 



document.getElementById("top").onchange = funkcja1; //
document.getElementById("bottom").onchange = funkcja1; //ta funcja ma zrobić że jeśli wybierzesz dany kolor to zmienia się tło

document.getElementById("btn").onclick = funkcja2; //ta funkcja ma uruchomić funkcję wyżej
