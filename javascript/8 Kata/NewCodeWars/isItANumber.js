// https://www.codewars.com/kata/is-it-a-number/train/javascript

let str = 'string'
let num = 21
let neg = -34
let dec = 7.21
let crap = NaN

function isDigit(s) {
    if (Math.floor(s) || Number.isInteger(s)){
        return 'It is a number'
    } else if (s === NaN) {
        return NaN
    } else {
        return 'It is a string'
    }
  }

  console.log(isDigit(crap))