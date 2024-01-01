/*
Given a number n , printthe below pattern

n=5
    *
   ***
  *****
 *******
********* 


*/

function printPattern(n){
    //logic for every row
    //for printing left side, we have to do one thing for nth row , we have (n-i) spaces and i stars
    //for printing right side, we have to do one thing for nth row, we have (i-1) stars and we don't think about spaces here
    for(let i=1;i<=n;i++){
        let str = '';
        //printing the left side of pattern
        for(let spaces=1;spaces <=n-i;spaces++){
            str = str+' ';
        }
        for(let stars = 1;stars <=i;stars++){
            str = str+'*';
        }
        //printing the right side 
        for(let j =1;j<i;j++){
            str = str+'*';
        }

        console.log(str);
    }

}

printPattern(5);