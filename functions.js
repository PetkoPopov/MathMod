function validate(number){

    if(typeof number !== "number"){
        return false;
    }
        if(number == null || number === ""|| number <=1){
            return false;
        }
    
    return true;   
 
    }
function numExpMod(is_simple, number, expon, mode){
let numDivideMode = number % mode;
    console.log(numDivideMode);
    if(!is_simple(mode)){alert("mod is not simple")}

    let countExp = 1;
    while(countExp !== expon){
        numDivideMode = (numDivideMode * number) % mode;
        countExp++;
    }
    
return numDivideMode;
}

    export { validate, numExpMod};

