function anagrams(stringOne,stringTwo){
    const charMapOne = charMap(stringOne);
    const charMapTwo = charMap(stringTwo);
    if(Object.keys(charMapOne).length !== Object.keys(charMapTwo).length){
        return false;
    }
    for(let char in charMapOne){
        if(charMapOne[char]!== charMapTwo[char]){
            return false;
        }
    }
    return true;
}

function anagrams2(stringOne,stringTwo){
    const firstString = stringOne.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    const secondString = stringTwo.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
    return firstString === secondString;
}

function charMap(string){
    let charMap = {}
    for(let char of string.replace(/[^\w]/g, "")){
        if(charMap[char]){
            charMap[char]++;
        }
        else{
            charMap[char] = 1;
        }
    }
    return charMap
}
console.log(anagrams2('fairy tales','rail safety'));