// https://www.codewars.com/kata/average-array/train/javascript

let array = [[1,2,3,4,15], [12,21,35,14,5], [2,5,7,4,5]]

function avgArray(arr) {
    let emptyArr = []
   let mapper = arr.forEach((e,i,a)=>{
       e.forEach((e,i,a)=>{
           if(emptyArr[i]!==undefined){
               console.log(emptyArr[i])
               emptyArr[i]+=e
            } else {
                emptyArr.push(e)
            }
        })
        console.log(emptyArr)
    })
    return emptyArr.map(e=>e/arr.length)
}
console.log(avgArray(array))
