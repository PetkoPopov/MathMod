import { numExpMod } from "./functions.js";
import { is_simple } from "./is_simple.js";

let button = document.getElementById("btn");
button.style.backgroundColor = "lightblue";
button.style.padding = "10px";
button.style.borderRadius = "7px";
button.style.fontSize = "20px";
button.style.fontWeight = "bold";
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "green";
    button.style.color = "white";
})
button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "lightblue";
    button.style.color = "black";
})
button.style.marginTop = "10px";
button.style.padding = "10px";
button.style.borderRadius = "7px";
button.style.fontSize = "20px";
button.style.fontWeight = "bold";   
button.addEventListener("click", () => {
    let key_number = document.getElementById("key_number");
    let angel_number = document.getElementById("angel_number");
    let boris_number = document.getElementById("boris_number");
    let mode_number = document.getElementById("mode_number");
    let result = document.getElementById("result");
let scr1= numExpMod(is_simple,
    Number(key_number.value),
    Number(angel_number.value),
    Number(mode_number.value)
   );
   result.innerText = scr1 ;
   let scr2= numExpMod(is_simple,
    Number(key_number.value),
    Number(boris_number.value),
    Number(mode_number.value)
   );
setTimeout(()=>{
    result.innerText =  scr2;
},1000) 
})