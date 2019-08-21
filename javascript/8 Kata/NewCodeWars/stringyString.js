// https://www.codewars.com/kata/stringy-strings/train/javascript

let num = 3

function stringy(size) {
    let a = 10
    let arr = []
    for (let i = 0; i < (size-1)/2; i++){
        arr.push(a)
    }
    return arr.join('')
  }

console.log(stringy(num))