// https://www.codewars.com/kata/mumbling/train/javascript

let string = 'abcd'
// a-bb-ccc-dddd
// b-aa-ccc-yyyy

function accum(s) {
    let str = s.split('')
    return str.reduce((r, e, i, a) => {
        if(i===str.length-1){
            r += e.toUpperCase() + e.toLowerCase().repeat(i)
        } else {
            r += e.toUpperCase() + e.toLowerCase().repeat(i) +'-'
        }
        return r
    }, '')
}

console.log(accum(string))