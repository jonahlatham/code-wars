// https://www.codewars.com/kata/sum-of-differences-in-array/train/javascript

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]

// function sumOfDifferences(array1, array2) {
//     let firstArr = array1.reduce((r, e) => {
//         return r -= e
//     }, 0)
//     let secondArr = array2.reduce((r, e) => {
//         return r -= e
//     })
//     return firstArr + secondArr
// }

// console.log(sumOfDifferences(arr1, arr2))
let array = [10,4,2,1]
console.log((10-6)+(6-3)+(3-1))

function sumOfDifferences(arr) {
    let sorted = arr.sort((a,b)=>{return b-a})
    if(sorted.lenght<=0){
        return 0
    }
    return sorted[0]-sorted[sorted.length-1]
}

console.log(sumOfDifferences([1,2,10]))