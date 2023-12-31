/*
Problem Statement : write a program to print all the even numbers greater than 1 and less than 25.
*/

function printNumbers(){
    for(let i=2;i<25;i++){
        if(i%2 == 0){
            console.log(`Even Number is ${i}`);
        }
    }
}

printNumbers();