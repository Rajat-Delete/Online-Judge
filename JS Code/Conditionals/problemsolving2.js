/*
Problem Statement : 
Consider three integer values and find the minimum among the given input values
*/

function findMin(a,b,c){
    if(a <= b && a <= c){
        console.log(`${a} is minimum`);
    }else if(b <= a && b <= c){
        console.log(`${b} is minimum`);
    }else{
        console.log(`${c} is minimum`);
    }
}

findMin(1,1,1);
findMin(NaN , 12 ,4);
