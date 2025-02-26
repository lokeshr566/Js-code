function compare(num1,num2,num3){
    if(num2<num1 & num3<num1){
        return num1;
    }
    else if(num1<num2 & num3<num2){
        return num2;
    }else{
        return num3;
    }
    
}

let res = compare(9,5,3);
console.log(res)