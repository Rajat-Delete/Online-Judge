/*
For a given number n , we have to print the below pattern.

n = 3

1 2 3
 2 3
  3
 2 3
1 2 3
*/

function printPattern(n){
    //printing the upper part
    //for a given row start with row -1 spaces and numbers from row number to n followed by spaces
    for(let i = 1; i<=n;i++){
        let str = '';
        for(let spaces=i-1;spaces>0;spaces--){
            str = str + ' ';
        }
        for(let number = i;number<=n;number++){
            str = str + number + ' ';
        }
        console.log(str);
    }
    //printing the lower part
    //we have to print n-1 rows
    //for a given row start from n - 1 and go till n
    for(let i = 1;i<=n-1;i++){
        let str = '';
        //first we have to print the spaces
        for(let spaces =n-i-1;spaces>0;spaces--){
            str = str + ' ';
        }
        //printing the number from n-row number to n
        for(let x = n-i;x<=n;x++){
            str = str + x + ' ';
        }
        console.log(str);
    }

}

printPattern(7);