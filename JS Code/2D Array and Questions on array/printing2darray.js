let grid = [[1,2,3,4], [5,6,7,8], [9,8,7,6], [5,4,3,2]];


//priinting the entire 2d array row by row

function display(array){
    //iterating over the entire array 
    let str = '';
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            str+=array[i][j];
        }
    }
    console.log(str);
}

display(grid);