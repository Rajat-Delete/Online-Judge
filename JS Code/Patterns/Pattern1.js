/*
Given a value n(positive integer), print the following pattern on screen

n=4
****
****
****
****

n=3
***
***
***

*/

function printPattern(num){
    //logic to print for every row
    //for every row print the same number of stars as n
    for(let i=0;i<num;i++){
        let str = '';
        for(let j=0;j<num;j++){
            str = str+'*'
        }
        console.log(str);
    }
}

printPattern(5);
printPattern(4);
printPattern(3);