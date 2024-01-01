/*
Given a number n, print the below pattern

n=5
*****
****
***
**
*

*/

function printPattern(n){
    //for every row we have to print (n-i+1)stars
    for(let i=1;i<=n;i++){
        let str = '';
        for(let j=1;j<=n-i+1;j++){
            str = str+'*';
        }
        console.log(str);
    }
}

printPattern(5);