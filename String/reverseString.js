function reverseString(string){
    return string.split("").reverse().join("");
}

function reverseString2(string){
    let reverseString = '';
    for (let char of string) {
        reverseString =char + reverseString;
    }
    return reverseString;
}
function reverseString3(string){
  return string.split("").reduce((reverse,char)=>char+reverse,"");
}
console.log(reverseString3('bikas'));