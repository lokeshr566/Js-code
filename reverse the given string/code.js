let string  = "helloworld";

function reverseString(str){
       return str.split("").reverse().join("");
}

let result = reverseString(string);
console.log(result);