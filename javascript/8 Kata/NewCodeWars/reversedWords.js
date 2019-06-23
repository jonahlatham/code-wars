// https://www.codewars.com/kata/reversed-words/train/javascript

let string = 'this is the way'

function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}

console.log(reverseWords(string))