/*
Problem Solving : Given a number x , write a function to determine whether a number is prime or not

Hint : A prime number is the one which divides either by itself or 1.
*/


function checkPrime(number){
    //checking from 2 to n-1 , if it gets divided or not
    let isprime = true;
    if(number > 1){
        for(let i=2;i<number -1;i++){
            if(number % i == 0 ){
                isprime = false;
                break;
            }else{
                continue;
            }
        }
    }
    if(isprime){
        console.log(`${number} is Prime`);
    }else{
        console.log(`${number} is not Prime`);
    }
}


checkPrime(10);
checkPrime(17);
checkPrime(29);