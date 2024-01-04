/*
print the fibonacci number series
*/

function printFibonacci(n){
    let secondLast =0;
    let last = 1;
    if(n == 0){
        console.log(0);
    }
    if(n >= 1){
        console.log(0);
        console.log(1);
    }

    for(let i = 2 ; i<n;i++){
        let nextFib = last + secondLast;
        secondLast = last;
        last = nextFib;
        console.log(nextFib);
    }
}

printFibonacci(7);