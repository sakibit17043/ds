function highestString(string){
 const charMap = characterMap(string);
 let highestChar;
 let max = 0;
  for(let char in charMap){
    if(charMap[char]>max){
        highestChar = char;
        max = charMap[char];
    }
  }
  return highestChar;
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
console.log(highestString("hellow"))