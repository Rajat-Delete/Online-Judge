//Given a String find the frequency of the charcaters

//javascript


function findFrequency(str){
    let obj= {};
    for(let i = 0;i<str.length-1;i++){
        if(obj[str[i]]){
            obj[str[i]]+=1;
        }else{
            obj[str[i]] = 1;
        }
    }
    console.log(obj);
}

findFrequency('javascript');
