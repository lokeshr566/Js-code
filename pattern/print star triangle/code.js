function trianglePattern(){
    let text = "";
    let num = 5;
    for(let i=1;i<=num;i++){
        for(let j=1;j<=i;j++){
            text+= "* ";
        }
        text+= "\n"
    }
    return text;
}
console.log(trianglePattern())