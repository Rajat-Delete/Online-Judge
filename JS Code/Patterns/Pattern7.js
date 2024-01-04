/*
Butterfly Pattern : 

n = 5
*   *
** **
*****
** **
*   *


n=7
*     *
**   **
*** ***
*******
*** ***
**   **
*     *

*/


function printPattern(n){
    for(let i = 1;i<=n;i++){
        let str = '';
        //printing the upper left part of the pattern
        //in ith row we have to print i stars first
        for(let leftstars = 1;leftstars <(i/2);leftstars++){
            str = str+'*';
        }
        console.log(str);
    }
}

printPattern(7);