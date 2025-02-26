function findOddOrEven(num){
   if(num%2 === 0){
    return "Even"
   }
   else{
    return "Odd"
   }
}

let res = findOddOrEven(8);
console.log(res)