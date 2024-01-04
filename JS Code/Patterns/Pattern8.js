/*
For a Given number n , print the below pattern
 
n=4

   1
  121
 12321
1234321

*/

function printPattern(n){

    //ith row is having (n-i) spaces and i times print index 
    for(let i=1;i<=n;i++){
        //first we have to print n-i spaces
        let str = '';
        let value=1;
        for(let spaces=1;spaces<=(n-i);spaces++){
            str =str+' ';
        }
        for(let numbers=1;numbers<=i;numbers++){
            str = str+value;
            value++;
        }

        //printing the right side as well
        for(let right=i-1;right>=1;right--){
            str =str+right;
        }
        console.log(str);
    }
}

printPattern(5);