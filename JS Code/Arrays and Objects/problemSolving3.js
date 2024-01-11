//Given an Array of strings, print all the unique strings of the array

function printUniqueStrings(arr){
    let object = {};
    for(let element of arr){
        object[element] = 1;
    }
    console.log(object);
    return Object.keys(object);
}

console.log(printUniqueStrings(['abc','hello','c','d','abc','c','d']));