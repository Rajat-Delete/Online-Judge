/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
*/

//so every string in js is basically a sequence of charcaters, so we can use 2 pointers one from left and right 
//and check if i==j, if things are equal we can check the internal substring. 

function checkPalindrone(str){
    str = str+'';
    for(let i=0,j=str.length-1;i<=j;i++,j--){
        let leftChar = str[i];
        let rightChar = str[j];
        console.log(leftChar , rightChar);
        if(leftChar == rightChar){
            continue;
        }else{
            return false;        
        }
        }
        return true;
}
console.log(checkPalindrone(11));