// https://www.codewars.com/kata/remove-first-and-last-character-part-two/train/javascript

let str = '1,2,4'
let string ='     1,2,3,4,5,6,7,8,9        '
let ss = '         '

function array(arr){
    if(arr.length < 3){
        return null
    } else {
        return arr.trim().replace(/,/g, ' ').slice(1, arr.length-2).trim()
    }
}

console.log(array(ss))
    