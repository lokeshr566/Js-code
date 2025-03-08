function reverseSentence(string){
    let str = string.split(" ");
    let maped = str.map((e)=>e.split("").reverse().join(""))
    return maped.join(" ")
}

console.log(reverseSentence("mern stack developer"))