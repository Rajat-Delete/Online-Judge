/*
Problem Statement : Given three integers a,b,c. Check if we can form a traingle with the sides of the traingle having length a,b,c
Hint : For a valid traingle , it's two other sides sum should be greater than current side.
*/

function checkValidTraingle(a,b,c){
    if((a + b > c)&&(b+c>a)&&(c+a>b)){
        console.log(`${a},${b},${c} will form a valid traingle`);
    }else{
        console.log(`${a},${b},${c} will not form a valid traingle`);
    }

}

checkValidTraingle(11,2,3);
checkValidTraingle(12,88,5);