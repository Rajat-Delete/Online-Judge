/*
Problem Statement : check whether numbers are even or odd between from 1-50
*/

function checkEvenOrOdd(){
    //Iterating over every element and checking if it is odd or even
    for(let i =1; i<=50;i++){
        if(i%2 == 0){
            console.log(`${i} is even`);
        }else{
            console.log(`${i} is odd`);
        }
    }

}

checkEvenOrOdd();