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


// function sumOfDifferences(arr) {
//     return arr.sort((a,b)=>{return b-a}).reduce((r,e,i,a)=>{
//         return r-=e
//     }, 0)
// }

// console.log(sumOfDifferences([1,2,10]))