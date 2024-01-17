/*
Find all the numbers disappeared in the array.

Given an array nums of n integers where nums[i] is in the range [1,n] , return an array of all the integers in the range [1,n] that doesnot appear in nums.

[4,3,7,2,8,2,3,1]
output : [5,6]

*/


//If extra space is provided then we can store the array in object and we can check from nunbers from 1 to n whether they are present in object or not


//Now we can't use extra space , so we will use the constraint that every number is positive

//we will try to exploit the n-1 index so that we can remember that it has done by n-1 only

//nums [4,3,2,7,8,2,3,1]
//for every number exploit n-1 index
//exploited array = [-4,-3,-2,-7,8,2,-3,-1]

var findDisappearedNumbers = function(nums) {
    let resultlist = [];
    //so first we will exploit the array
    for(let i = 0 ; i<nums.length;i++){
        let value = Math.abs(nums[i]);
        nums[value-1]= Math.abs(nums[value-1])*(-1); 
    }
    for(let j =0;j<nums.length;j++){
        if(nums[j]>0){
            resultlist.push(j+1);
        }
    }
    console.log(resultlist);
};


findDisappearedNumbers([4,3,2,7,8,2,3,1]);