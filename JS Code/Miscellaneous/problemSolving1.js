/*
Given a number x , calculate the sum of digits of number x.
*/

function sum(x){
    //first we have to find the remainder and add it to sum while the quotient is greater than 0.
    let sum=0;
    let remainder;
    while(x>0){
        remainder = x%10;
        sum = sum+remainder;
        x=parseInt(x/10);;

    }
    console.log(sum);
}

sum(4136);
sum(1200);