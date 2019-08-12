// https://www.codewars.com/kata/whats-in-a-name/train/javascript

let string = 'A crew that boards the ship'
let st = 'chris'
function nameInStr(str, name) {
    let stringer = str.toLowerCase().split(' ').join('').split('')
    console.log(stringer)
    let namer = name.toLowerCase().split('')
    return stringer.reduce((r, e, i) => {
       console.log(namer[r])
       if(namer[r] === e){
           r++
       }
        return r
    }, 0) === namer.length
}
console.log(nameInStr(string, 'chris'))