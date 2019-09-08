// https://www.codewars.com/kata/product-array-array-series-number-5/train/javascript

let arr = [1, 2, 3, 4, 5]

function productArray(numbers) {
    let array=[]
    let loopArr = arr.reduce((r,e,i)=>{
        return r*=e
    },1)
    return loopArr
}

console.log(productArray(arr))