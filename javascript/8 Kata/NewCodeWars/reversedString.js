// https://www.codewars.com/kata/reversed-strings/train/javascript

let string = 'Hello'

function solution(str){
    return str.split('').reverse().join('')
}

console.log(solution(string))