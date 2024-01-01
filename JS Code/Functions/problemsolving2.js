/*
Problem Statement : Write a Function that takes a String and returns the nunber of word in the sentence that starts with vowel.
*/

function countNumberOfWords(str){
    let list = str.split(' ');
    let count = 0;
    //Iterating over the list and checking if the first element is vowel or not
    for(let i =0 ;i<list.length;i++){
        if(list[i][0] == 'A' ||list[i][0] == 'E' ||list[i][0] == 'I' ||list[i][0] == 'O' ||list[i][0] == 'U' ||list[i][0] == 'a' ||list[i][0] == 'e' ||list[i][0] == 'i' ||list[i][0] == 'o' ||list[i][0] == 'u'){
            count ++;
        }
    }
    console.log(`Count of Vowel words is ${count}`);
}

countNumberOfWords('I am working for Myself');