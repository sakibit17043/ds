function reverseInt(num){
  const reverse = num.toString().split("").reverse().join("");
  return parseInt(reverse)*Math.sign(num);
}
console.log(reverseInt(30));