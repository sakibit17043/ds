function capitalization(string){
    let result =  string[0].toUpperCase();
    for(let char = 1; char<string.length; char++){
        if(string[char-1]===' '){
             result = result + string[char].toUpperCase()
        }
        else{
            result = result + string[char];
        }
    }
    return result;
}
function capitalization2(string){
    const capital = [];
    for(let word of string.split(" ")){
        capital.push(word[0].toUpperCase()+ word.slice(1));
    }
    return capital.join(" ");
}
console.log(capitalization2('please subscribe my channel'));