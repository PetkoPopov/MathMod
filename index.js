import { is_simple } from "./is_simple.js";
import { gen_simple } from "./genSimple.js";
// num = Number(num);

var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let expon = document.getElementById("exp").value;
    let number = Number(document.getElementById("num").value);
    let modInput= document.getElementById("mod");
    let mode = modInput.textContent
    mode= Number(mode);
    expon = Number(expon);
    let numDivideMode = number % mode;
    console.log(numDivideMode);
    if(!is_simple(mode)){alert("mod is not simple")}

    let countExp = 1;
    while(countExp == expon){
        // alert(numDivideMode);
        // console.log(numDivideMode)
        numDivideMode = (numDivideMode * number) % mode;
        countExp++;}
    
    document.getElementById("result").innerText = numDivideMode
})
let mode = document.getElementById("mod");
mode.addEventListener("click",()=>{
mode.innerHTML=gen_simple();
})