// https://www.codewars.com/kata/short-long-short/train/javascript

let aaa = 'U'
let bbb = 'False'

function solution(a, b){
if(a.split('').length > b.split('').length){
    return a + b + a
} else {
    return b + a + b
}
}
  console.log(aaa.split('').length)
  console.log(bbb.split('').length)

console.log(solution(aaa, bbb))