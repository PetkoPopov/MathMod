import { gen_simple } from "./genSimple.js";
import { is_simple } from "./is_simple.js";
// alert("index_2.js loaded")
var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let expon  = Number(document.getElementById("exp").value);
    let number = Number(document.getElementById("num").value);
    let mode   = Number( document.getElementById("mod").value);

    let numDivideMode = number % mode;
    console.log(numDivideMode);
    if(!is_simple(mode)){alert("mod is not simple")}

    let countExp = 1;
    while(countExp !== expon){
        // alert(numDivideMode);
        // console.log(numDivideMode)
        numDivideMode = (numDivideMode * number) % mode;
        countExp++;
    }
    
        document.getElementById("result").innerText = numDivideMode
    })
//////////////////////////////////////////////////////////
///////////////////////////////////
