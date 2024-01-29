/*
You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.

 

Example 1:

Input: order = "cba", s = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
Example 2:

Input: order = "cbafg", s = "abcd"
Output: "cbad"
 

Constraints:

1 <= order.length <= 26
1 <= s.length <= 200
order and s consist of lowercase English letters.
All the characters of order are unique.
*/

function custom(order,s){
    let obj ={};
    let permutedString='';
    let remStr = '';

    //for calculating freq
    for(let i =0;i<s.length;i++){
        if(obj[s[i]]){
            obj[s[i]]+=1;
        }else{
            obj[s[i]]=1;
        }
    }
    //updating the object and finding the permuted String
    for(let i=0;i<order.length;i++){
        if(obj[order[i]]){
            while(obj[order[i]]>0){
                obj[order[i]]-=1;
                permutedString += order[i];
            }
            
        }
    }
    //adding the remaining characters from s
    for(let key in obj){
        while(obj[key]>0){
            remStr +=key;
            obj[key]-=1;
        }
    }
    return permutedString+remStr;
}


console.log(custom('kqep','pekeq'));


s.split('').sort((a,b) => order.indexOf(a)-order.indexOf(b) )
