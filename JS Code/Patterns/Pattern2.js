/*
Given a value n , print the following pattern on screen.

n=4
*
**
***
****

n=3
*
**
***

*/

function printPattern(n){
//logic for printing every row, for every row , row starts are there
    for(let i =1;i<=n;i++){
        let str = '';
        for(let j=0;j<i;j++){
            str = str + '*';
        }
        console.log(str);
    }

}

printPattern(4);