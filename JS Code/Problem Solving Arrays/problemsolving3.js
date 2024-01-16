/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

[1,1,0,1,1,1] output=3
*/


function findmaxOne(nums){
    let max = 0;
    let curr = 0;

    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            curr++;
        }else{
            max = Math.max(curr,max);
            curr=0;
        }
    }
    return Math.max(curr,max);
}

console.log(findmaxOne([1,1,0,1,1,1]));


