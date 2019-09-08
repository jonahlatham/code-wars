// https://www.codewars.com/kata/tidy-number-special-numbers-series-number-9/train/javascript

let arr = [1, 4, 2, 6, 4]
let num = 1234
console.log(num.toString().split(''))

function tidyNumber(n) {
    let number = n.toString().split('').reduce((r,e,i,a)=>{
        if(Number(e)>a[i+1]){
            return r = false
        }
            return r
    },true)
    return number
}

console.log(tidyNumber(num))