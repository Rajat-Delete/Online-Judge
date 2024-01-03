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
        //printing the left side of upper pattern
        //n-row spaces , row stars
        for(let spaces = 1;spaces <= (n-i);spaces++){
            str = str+' ';
        }
        //pattern of left side 
        //for every row number we have row stars
        for(let stars = 1;stars <=i ;stars++){
            str = str+'*';
        }

        //printing the right side of the pattern
        //for every row we have to print row - 1 stars
        for(let stars = 1;stars < i;stars++){
            str = str + '*'
        } 
        console.log(str);
    }
    //printing the lower side of the pattern
    //rows will be (i-1)
    for(let i =1;i<n;i++){
        let str = '';
    //printing the lower left side of the pattern
    //spaces will always be row number , stars will always be (n-row)stars
    for(spaces = 1;spaces <=i;spaces++){
        str = str + ' ';
    }
    for(let stars =1;stars <=(n-i);stars++){
        str = str + '*';
    }
    //printing the right side of the pattern
    //stars will be (n-2*i) and keeps and decreasing
    for(let stars = 1;stars <= (n -i-1);stars++){
         str = str+'*';
     }
    console.log(str);
    }
}

printPattern(7);