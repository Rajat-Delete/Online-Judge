/*
Given a value n, print the following pattern on screen.

n=4
   *
  **
 ***
****


*/


function printPattern(n){
    //first we will see the logic for printing every row
    //so for ith row (n-i) spaces are there and i stars are there.

    for(let i=1;i<=n;i++){
        let str='';
        //printing spaces
        for(let spaces=1;spaces <= (n-i);spaces++){
            str = str + ' ';
        }
        //printing stars
        for(let star=1;star <=i;star++){
            str = str +'*';
        }
        console.log(str);
    }
}

printPattern(4);