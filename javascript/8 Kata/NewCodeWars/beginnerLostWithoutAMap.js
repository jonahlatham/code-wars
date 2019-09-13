let arr = [1,2,3,4,5]

function maps(x){
let newArr = x.reduce((r,e,i)=>{
    r.push(e*2)
    return r
},[])
return newArr
}

console.log(maps(arr))