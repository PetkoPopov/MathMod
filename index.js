import { is_simple } from "./is_simple.js";
let expInput = document.getElementById("exp");
let numInput = document.getElementById("num");
let modInput= document.getElementById("mod");
let btn = document.getElementById("btn");
 btn.addEventListener("click", () => {
console.log(modInput.value);
 if(is_simple(modInput.value)){
    console.log("mod is simple")}
    else{
alert("mod is not simple")}


})