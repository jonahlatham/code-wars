// https://www.codewars.com/kata/string-transformer/train/javascript

let string = 'Hello World' //wORLD hELLO
function stringTransformer(str) {
    let stringArray = str.split('').map((e,i)=>{
        if(e !== e.toLowerCase()){
            return e.toLowerCase()
        } else {
            return e.toUpperCase()
        }
    })
    return stringArray.join('').split(' ').reverse().join(' ')
  }

  console.log(stringTransformer(string))