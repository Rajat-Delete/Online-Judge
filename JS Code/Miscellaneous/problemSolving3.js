/*
Problem Statement : Given a number n , print its reversed number.
*/

function printReversed(n){
    let reverse=0;
    let remainder;
    while(n>0){
        let dummy=0;
        remainder = n%10;
        n = parseInt(n/10);
        dummy = reverse + remainder;
        if(n>0){
            reverse = dummy*10;
        }else{
            reverse = reverse+remainder;
        }
    }
    return reverse;
    
}

console.log(printReversed(999888));