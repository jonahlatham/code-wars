let array = [1, -3, -4, 0, 5]

function catchSignChange(arr){
    return arr.slice(1).filter((e,i)=>(e<0)!==(arr[i]<0)).length;
}

console.log(catchSignChange(array))