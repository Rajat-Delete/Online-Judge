/*
Problem Statement : Given a Integer Num, repeatedely add all its digits until the result has only one digit and return it.
*/

function returnResult(num){
    if(num >= 10){
        let sum = calculateSum(num);
        //console.log(`sum is `,sum);
        while(sum >= 10){
           sum = calculateSum(sum);
        }
        return sum;
    }else{
        return num;
    }
}

function calculateSum(num){
    let sum = 0;
    while(num > 0){
        let remainder = num % 10;
        let quotient = Math.floor(num/10);
        sum = sum + remainder;
        num = quotient;
        //console.log(`num ${num} sum ${sum}`);
    }
    return sum;
   
}

returnResult(1234);