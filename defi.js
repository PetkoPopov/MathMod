import { numExpMod } from "./functions.js";
import { is_simple } from "./is_simple.js";

let button = document.getElementById("btn");
let btn_second = document.getElementById("btn_next_step");
var expl = document.getElementById("explenation");
let expl_div = document.createElement("div");
expl.appendChild(expl_div);
let result_angel=0; 
let result_boris=0 ;
let scr1= 0 ;
let scr2 = 0 ;
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
    let key_number   = document.getElementById("key_number");
    let angel_number = document.getElementById("angel_number");
    let boris_number = document.getElementById("boris_number");
    let mode_number  = document.getElementById("mode_number");
    let res_angel    = document.getElementById("result_angel");
    let res_boris    = document.getElementById("result_boris");
    ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    btn_second.style.display="block";                               ///////////////////
        expl.style.display = 'none';                                                            ///////////////////
                                                                  ///////////////////
    ////////////////////////////////////////////////////////////////////////////
     scr1= numExpMod(is_simple,
        Number(key_number.value),
        Number(angel_number.value),
        Number(mode_number.value)
    );
    
    
    res_angel.innerHTML = "Ангел извършва операцията " +key_number.value + " ^ " + angel_number.value + " mod " + mode_number.value + ' = <h2>'+scr1+'</h2>' ;
     scr2= numExpMod(is_simple,
    Number(key_number.value),
    Number(boris_number.value),
    Number(mode_number.value)
   );
    res_boris.innerHTML = 'Борис извършва операцията ' +key_number.value + " ^ " + boris_number.value + " mod " + mode_number.value + ' = <h2>'+scr2+'</h2>' ; 
    
        let result_div = document.getElementById("final_result");
        result_div.innerHTML = 
        "Сега Ангел и Борис разменят своите резултати.Ако злонамерен потребител прихване изчисленото от Ангел <h2>" +scr1+"</h2> или <h2>"+scr2+"</h2> например ,той не може в разумен срок да разбере тайното число на Ангел.За целта той трябва да тества публичното число key_num^2 mod=?, key_num^3mod=?, key_num^4mod=?, key_num^5mod=? и така много пъти докато стигне до Mode-1 ! това ще отнеме много време дори със супер компютър";
 
 
    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
    /////////////                            ////////////////////////////////////////////
    /////////////                            ///////////////////////////////////////////
    /////////////                            ///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////
    let next_step = document.getElementById("result");
    next_step.style.display = "flex";
    next_step.style.flex = "row";
    document.getElementById("next_step").style.display = "block";
    
    btn_second.style.backgroundColor = "lightblue";

        btn_second.style.padding = "10px";
        btn_second.style.borderRadius = "7px";
        btn_second.style.fontSize = "20px";
        btn_second.style.fontWeight = "bold";   
        btn_second.style.width ="fit-content";      




    })
    
    
    
    btn_second.addEventListener("click", () => {
        
        expl.style.display="flex";
        expl.style.flex ="row";
        
        result_angel = numExpMod(is_simple,scr1,Number(boris_number.value),Number(mode_number.value));
        result_boris = numExpMod(is_simple,scr2,Number(angel_number.value),Number(mode_number.value));
            
            expl_div.innerHTML = "Сега и Ангел и Борис разполагат с едно и също число <h2>"+result_angel+"</h2> с което да шифрират (на английски криптират) своите съобщения "

        let expl_angel= document.querySelectorAll("#explenation div")[0];
        let expl_boris= document.querySelectorAll("#explenation div")[1];
        let tmp_expl_angel = expl_angel.textContent;
        let tmp_expl_boris = expl_boris.textContent;
        expl_angel.innerHTML=tmp_expl_angel+ "<br>Ангел извършва операцията " + scr2 + " ^ " + angel_number.value + " mod " + mode_number.value + ' = <h2>'+result_angel+'</h2></br>' ;
        expl_boris.innerHTML=tmp_expl_boris+ "<br>Борис извършва операцията " + scr1 + " ^ " + boris_number.value + " mod " + mode_number.value + ' = <h2>'+result_boris+'</h2></br>' ;
        btn_second.style.display = "none"; 

    })