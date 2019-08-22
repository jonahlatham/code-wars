// https://www.codewars.com/kata/stringy-strings/train/javascript

let num = 5

function stringy(size) {
    let arr = []
    for (let i = 0; i < size; i++){
        if(i%2!==0){
            arr.push(0)
        } else {
            arr.push(1)
        }
    }
    return arr.join('')
  }

console.log(stringy(num))