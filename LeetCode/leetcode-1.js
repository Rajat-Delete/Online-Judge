/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/


//Brute force Approach since nums.length < 10 power4 


var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1; i++){
        for(let j=i+1;j<nums.length; j++){
            //console.log(nums[i],nums[j]);
            if(nums[i]+nums[j] === target){
                //console.log(nums[i], nums[j]);
                return [i,j];
            }
        }
    }
};


//optimised approach , less than 10power8 operations

function fn(x,y){
    return x[0] - y[0];
}
var twoSumOptimised =  function (nums, target){
    for(let i = 0;i<nums.length;i++){
        nums[i]= [nums[i],i];
    }
    nums.sort(fn);
    console.log(nums);
    let start = 0;
    let end  = nums.length-1;
    while(start<end){
        if(nums[start][0] + nums[end][0] == target){
            return [nums[start][1] , nums[end][1]];
        }else if (nums[start][0] + nums[end][0] > target){
            end--;
        }else{
            start++;
        }
    }

}


console.log(twoSumOptimised([7,2,15,11],9));