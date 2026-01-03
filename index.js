import { is_simple } from "./is_simple.js";
let expInput = document.getElementById("exp");
let numInput = document.getElementById("num");
let modInput= document.getElementById("mod");
var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    if(!is_simple(modInput.value)){alert("mod is not simple")}

    let countExp = 1;
    let numDivideMode = numInput.value % modInput.value;
    document.getElementById("result").innerText = numDivideMode;
    while(countExp*2<expInput.value){
        alert("first loop");
        numDivideMode = (numDivideMode * numDivideMode) % modInput.value;
        countExp= countExp*2;  
    }
    document.getElementById("result").innerText = numDivideMode+" after first loop"+countExp;
    // while(countExp!= expInput.value){
    //     alert("await second loop");
    //     numDivideMode = (numDivideMode * numInput.value) % modInput.value;
    //     countExp++;}
    // console.log(numDivideMode);


})