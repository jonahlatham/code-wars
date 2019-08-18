// https://www.codewars.com/kata/mumbling/train/javascript

let string = 'abcd'

function accum(s) {
let str = s.split('')
return str.reduce((r,e,i,a)=>{
    return r += e + str.length
},'')
}

console.log(accum(string))