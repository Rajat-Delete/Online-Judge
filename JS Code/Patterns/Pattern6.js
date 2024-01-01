/*
Given a number n, print the below pattern
n=3, n will always be odd

n=3

  *
 ***
*****
 ***
  * 

*/

function printPattern(n){
    //first we have to find the pattern for every row, we have to first print 2n-1 rows
    //lets split the pattern into segments and print it individually
    //upper part
    for(let i=1;i<=n;i++){
        let str = '';
        //printing the spaces 
        for(let spaces=1;spaces<=(n-i);spaces++){
            str =str + ' ';
        }
        //printing the left side of the pattern
        for(let stars= 1;stars<=i;stars++){
            str = str + '*';
        }
        //printing the right side of the pattern
        for(let rightstars =1;rightstars<i;rightstars++){
            str = str+'*'
        }
        console.log(str);
    }

    //lower part
    for(let row = 1;row<n;row++){
        //printing the spaces
        //first we have to print row spaces followed by stars, rows will be n-1, spaces will be i for ith row and stars will be (n - 2) for every row
        let str = '';
        for(let spaces=1 ; spaces<=n/2+row-1;spaces++){
            str = str + ' ';
        }

        for(let stars = n-(2*(row-1)) ; stars>0;stars--){
            str = str + '*';
        }
        console.log(str);
    }
}

printPattern(7);