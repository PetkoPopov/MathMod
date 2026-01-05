function is_simple(num){

    let is_sim=true
for(let i=2;i<=Math.sqrt(num);i++){

        if(num%i==0){
            is_sim=false
            break
        }
    }
    return is_sim
}
/////////////////////////////////////////////////////////////////
////////////test code/////////////////////////////////////
// let count = 0
//     for(let i =0 ; i<1000000;i++){
//         if(is_simple(i)){
//             count++
//             console.log(i+" is simple")
//         }}
//         console.log("total simple numbers :"+count)
///////////////////////////////////////////////////////////////
export {is_simple}