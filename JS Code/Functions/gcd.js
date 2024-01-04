/*
Function Statement : Given two numbers , find the GCD
*/

function findGCD(a,b){
    let result = 1;
    for(let i = 2;i<Math.min(a,b);i++){
        if(a%i == 0 && b%i == 0){
           result= i;
        }
    }
    return result;
}

console.log(findGCD(28,24));