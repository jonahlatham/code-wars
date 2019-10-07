let array = [1,2,3,4,5,6,7,8,9,10]
function fourth(arr){
    return arr.map((e,i)=>{
        if(i%3===0){
            return e
        }
    })
}
console.log(fourth(array))