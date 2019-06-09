// https://www.codewars.com/kata/square-n-sum/train/javascript

let arr = [1,2,3,4,5,6,7,8,9,10]
let array =[1,2,2]
function squareSum(numbers){
    return numbers.reduce((r,e,i) => {
        r += Math.pow(e, 2)
        return r
    }, 0)
}

console.log(squareSum(array))