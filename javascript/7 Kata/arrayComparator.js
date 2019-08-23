let arr1 = [1,0,3,4,5]
let arr2 = [1,4,2,6,8]

function matchArrays(v,s){
    let map1 = v.reduce((r,e,i)=>{
        if(s.includes(e)){
            r += 1
        }
        return r
    }, 0)
    return map1
}

console.log(matchArrays(arr1, arr2))