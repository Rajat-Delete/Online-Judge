/*
Problem Statement : 
Given a Number x , check is the number is even or odd
*/

function check(num){
    if(num % 2 === 0){
        console.log(`Number ${num} is Even`);
    }else{
        console.log(`Number ${num} is Odd`);
    }
}

check(12);
check(11);
check(0);