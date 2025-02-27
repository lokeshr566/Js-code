function checkPalindrome(str){
     let res = str.split("").reverse().join("")
     if(res === str){
        return `${str} is palindrome`;
     }else{
        return `${str} is not palindrome`;
     }
}

console.log(checkPalindrome("lini"))
