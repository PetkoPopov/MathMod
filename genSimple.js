import { is_simple } from "./is_simple.js";

/**
 * 
 * @param {*} n size of simple number 
 */
function gen_simple(n=5){
    let arr=[];
    for(let i=0 ; i < n ; i++){
      let y = Math.random()*10; 
      arr .push(Math.floor(y));  
    }
let num = arr[0];
for(let i = 1 ;i < arr.length ; i++){

    num = num*10 + arr[i];
}
while(!is_simple(num)){
    num = num +1;
}
// document.getElementById("result").innerText =num;
    return num;
}
export {gen_simple};