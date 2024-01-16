/*
You are given two integer arrays num1 and num2, sorted in non decreasing order and two integer represting m and n respectively the number of elements in num1 and num2 respectively.
num1 = [1,2,3] , m=3
num2 = [2,5,6] , n=3

[1,2,2,3,5,6]
*/

function addArrays(arr1,arr2){
    //iterate over two arrays using two pointers and check which element is smaller and add it in a new Array. 
    let finalArray = Array(arr1.length , arr2.length);
    let i = 0;
    let j = 0;
    let k =0;
    //this is the case for symmetrical part of array
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            finalArray[k] = arr1[i];
            i++;
        }else{
            //console.log(finalArray.length);
            //console.log(arr2.length);
            finalArray[k] = arr2[j];
            j++;
        }
        k++;
    }
    while(i<arr1.length){
        finalArray[k] = arr1[i];
        k++;
        i++;
    }
    while(j<arr2.length){
        finalArray[k] = arr2[j];
        k++;
        j++;
    }
    return finalArray;
}

console.log(addArrays([1,2,3],[2,5,6,8,9]));

