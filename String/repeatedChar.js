function repeatedChar(string){
    const charMap = characterMap(string);
    for(let char in charMap){
        if(charMap[char]>1){
            return true;
        }
    }
    return false;
}
function characterMap(string){
    const charMap = {};
    for(let char of string){
        if(charMap[char]){
            charMap[char]++;
        }
        else{
            charMap[char] = 1;
        }
    }
    return charMap;
}
console.log(repeatedChar('sakaiab'))