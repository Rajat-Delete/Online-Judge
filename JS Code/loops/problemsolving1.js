/*
Problem Statement : Write a Program to calculate sum of numbers from 1 to n

*/


function findSum(num){
    //looping over the range and storing the sum
    let sum =0;
    for(let i=1;i<=num;i++){
        sum = sum+i;
    }

    console.log(`Sum of numbers from 0 to ${num} is ${sum}`);
}

findSum(0);