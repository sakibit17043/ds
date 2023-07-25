function palindrome(string){
    for(let i = 0 ; i<=string.length/2;i++){
        if(string[i]!==string[string.length-1-i]){
            return false
        }
    }
    return true;
}
function palindrome2(string){
 return string.split("").every((char,index)=>char===string[string.length-1-index]);
}
console.log(palindrome2('madam'))