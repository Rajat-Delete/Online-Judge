/*
Given an array arranged in ascending order and a target value.Find the total number that adds upto sum.

array = [1,2,2,3,3,4,4,5,5,6,6,6]
target = 8

ans - 11
explanation - [2,6] - 6 , [3,5]-4 ,  [4,4] - 1

n<=10^5

[1,2,2,3,3,4,4,5,5,6,6,6]
   s                   e

freq=1
while(a[11] == a[1]){
    f=2
}
*/

var findNumberPairs = function (array,target){
    let start = 0;
    let end = array.length-1;
    let count = 0;
    while(start<end){
        if(array[start] !== array[end]){

        }else{
            if(array[start]+array[end] < target){
                console.log('here');
                start++;
            }else if(array[start]+array[end] === target){
                // we have to calculate individual frequency of each start and end anf then update the index 
                let freq_start=1;
                while(array[start+freq_start]==array[start]){
                    freq_start++;
                }
                console.log('freqStart',freq_start);
                let freq_end = 1;
                while(array[end-freq_end] == array[end]){
                    freq_end++;
                }
                console.log('freq_end',freq_end);
                console.log(freq_start,freq_end);
                count+=Math.floor(freq_start*freq_end);
            }else if(array[start]+array[end] > target){
                end--;
            }
        }
    }
    return count;
}

console.log(findNumberPairs([1,2,2,3,3,4,4,5,5,6,6,6],8));