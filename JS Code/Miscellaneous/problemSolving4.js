/*
Given a decimal number x , convert it into a binary number.
*/

//n=5 
/*
First mod it by 2 and we will get 1
now divide the number by 2 and take floor value
now we have 2 and we will again do mod and we will get 0 
now again divide by 2 and we will get 1

*/

function convertToBinary(x){
    let str = '';
    let quotient ;
    let remainder;
    while (x>0){
        remainder = x%2;
        str= remainder+str;
        x = Math.floor(x/2);
    }
    console.log(str);
}

convertToBinary(7);