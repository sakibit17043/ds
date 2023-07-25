function palindromeNumber(number){
    let reminder;
    let reverseNumber = 0;
    while(number>0){
        reminder = number%10;
        reverseNumber = reverseNumber*10 + reminder;
        number = parseInt(number/10);
    }


    return reverseNumber;
}
const number = 456

console.log(palindromeNumber(number));