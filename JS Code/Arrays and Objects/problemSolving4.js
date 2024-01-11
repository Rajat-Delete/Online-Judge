/*
Given an array, write an algorithm to reverse the same array.
We should not create a new array.

[5,9,1,8,2,3]
[3,2,8,1,9,5]
*/

function reverse(arr){
    for(let i=0,j=arr.length;i<=j;){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

console.log(reverse([5,9,1,8,2,3]));

