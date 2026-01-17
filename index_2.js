import { validate } from "./functions.js";
import { gen_simple } from "./genSimple.js";
import { is_simple } from "./is_simple.js";
// alert("index_2.js loaded")
var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let expon  = Number(document.getElementById("exp").value);
    let number = Number(document.getElementById("num").value);
    let mode   = Number( document.getElementById("mod").value);

if(!validate(number) ){
    console.log("number is valid")
    // alert("number is not valid")
    document.getElementById("num").value = "";
    return
}

if(!validate(expon) ){
    console.log("number is valid")
    // alert("expon is not valid")
    document.getElementById("exp").value = "";
    return
}

if(!validate(mode) ){
    console.log("number is valid")
    // alert("mode is not valid")
    document.getElementById("mod").value = "";
    return
}

    let numDivideMode = number % mode;
    console.log(numDivideMode);
    if(!is_simple(mode)){alert("mod is not simple")}

    let countExp = 1;
    while(countExp !== expon){
        numDivideMode = (numDivideMode * number) % mode;
        countExp++;
    }
    
        document.getElementById("result").innerText = numDivideMode
    })
//////////////////////////////////////////////////////////
///////////////////////////////////
