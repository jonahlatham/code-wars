// https://www.codewars.com/kata/is-n-divisible-by-x-and-y/train/javascript

function isDivisible(n, x, y) {
if(x%n===0 && y%n===0){
    return true
} else {
    return false
}
}

console.log(isDivisible(2,4,6))