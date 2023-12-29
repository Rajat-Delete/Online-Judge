/*
Problem Statement : Given the length of the traingle in form of 3 integers.check the given traingle is equilateral,Scalene,Isoceles.
*/

function checkTraingleType(a,b,c){
    if(a === b && b === c){
        console.log(`${a},${b},${c} will form a Equilateral traingle`);
    }else if(a ===b || b ===c || c===a){
        console.log(`${a},${b},${c} will form a Scalene traingle`);
    }else{
        console.log(`${a},${b},${c} will form a Isoceles traingle`);
    }
}

checkTraingleType(1,2,3);
checkTraingleType(1,1,2);
checkTraingleType(1,1,1);