// https://www.codewars.com/kata/get-the-middle-character/train/javascript

let str = 'test'
let string = 't'
let ss = 'abcdefghija'
function getMiddle(s) {
    let n = (s.length / 2) - 1
    if (s.length % 2 === 0) {
        return s.slice(n, s.length - n)
    } else if (s.length <=2){
        return s
    } else {
        return s.slice(n+1,s.length-(n))
    }
}

console.log(getMiddle(str))
console.log(getMiddle(string))
console.log(getMiddle(ss))