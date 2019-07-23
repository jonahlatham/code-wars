// https://www.codewars.com/kata/remove-first-and-last-character-part-two/train/javascript

let string = 'hello'
let str = ''
let str2 = '3'
function array(arr){
    if(arr.trim().length > 1){
        return arr.slice(1, arr.length-1).replace(/,/g,' ').trim()
    } else {
        return null
    }
}

console.log(array(string))