//creating a basic 2d grid of 4X4 
let grid = [[1,2,3,4], [5,6,7,8], [9,8,7,6], [5,4,3,2]];

console.log(grid);

//now suppose we have to create a 2d array of 5X6 and every element of it should be filled with 0.

let outerArray = Array(5);

for(let i=0;i<5;i++){
    let innerArray = Array(6);
    outerArray[i] = innerArray.fill(0);
}

console.log(outerArray);

//updating the array
outerArray[0][1]=11;
outerArray[0][2]=12;

console.log(outerArray);

