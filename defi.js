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
    let res_angel = document.getElementById("result_angel");
    let res_boris = document.getElementById("result_boris");
let scr1= numExpMod(is_simple,
    Number(key_number.value),
    Number(angel_number.value),
    Number(mode_number.value)
   );


   res_angel.innerHTML = "Ангел извършва операцията " +key_number.value + " ^ " + angel_number.value + " mod " + mode_number.value + ' = <h2>'+scr1+'</h2>' ;
   let scr2= numExpMod(is_simple,
    Number(key_number.value),
    Number(boris_number.value),
    Number(mode_number.value)
   );
    res_boris.innerHTML = 'Борис извършва операцията ' +key_number.value + " ^ " + boris_number.value + " mod " + mode_number.value + ' = <h2>'+scr2+'</h2>' ; 
   document.getElementById("second_step").style.display = "block";
    let btn_second = document.getElementById("btn_second_step");
      btn_second.style.backgroundColor = "lightblue";
        btn_second.style.padding = "10px";
        btn_second.style.borderRadius = "7px";
        btn_second.style.fontSize = "20px";
        btn_second.style.fontWeight = "bold";   
        btn_second.style.width ="fit-content";      
        let result_div = document.getElementById("final_result");
        result_div.style.display = "block";
})