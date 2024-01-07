/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.

*/
//this function is going to check whether the entered character is english characters
function checkCharacter(c){
    return /[a-zA-Z]/.test(c);
    
}

function reverseOnlyLetters(str){
    let reverseStr='';
    let arr = str.split('');
    for(let i=0,j=arr.length-1;i<=j;){
        if(checkCharacter(arr[i]) && checkCharacter(arr[j])){
            let temp = arr[j];
            arr[j] = str[i];
            arr[i] = temp;
            i++;
            j--;
            console.log('Arr is ',arr);   
        }else if(!checkCharacter(arr[i])){
            i++;
        }else if(!checkCharacter(arr[j])){
            j--;
        }
    }
    arr.forEach(element => {
        reverseStr = reverseStr+element;
    });
    return reverseStr;
}


console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));