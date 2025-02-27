let arr = [1,2,3,4,5,3,2];

function findDuplicates(ar){
    let temp = [];
    for(let i=0;i<ar.length;i++){
       if(temp.indexOf(ar[i]) === -1){
           temp.push(ar[i]);;
       }
    }
    return temp;
}
console.log(findDuplicates(arr))
