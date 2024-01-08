//Sort a array of 0's and 1's such that all 0 are before 0
//We can create a new array or traverse multiple times


function sort(arr){
    let i = 0;
    let j = arr.length-1;
    while(i<=j){
        let swap=0;
        if(arr[i] == 1){
            //need to swap the data
            swap = arr[i];
            arr[i] = arr[j];
            arr[j]= swap;
            j--;
        }else if(arr[i] == 0){
            i++;
        }
    }
    return arr;
}

console.log(sort([1,0,1,1]));