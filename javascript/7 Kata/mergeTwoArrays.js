let arr1 = [1,4,5,66,33,22,14,72]
let arr2 = ['a','u','d','e','p']

function mergeArrays(a, b) {
    let newArr = a.concat(b)
    // return newArr.sort((a,b)=>{return a-b})
    return newArr.sort((a,b)=>{return a-b})
  }

  console.log(mergeArrays(arr1, arr2))