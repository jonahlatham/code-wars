// https://www.codewars.com/kata/min-or-max-of/train/javascript

function max(xx) {
    if(xx !== xx.toString()){
        return xx.sort((a, b) => { return a - b }).slice(xx.length - 1).join('')
    } else {
        return xx.split('').sort().slice(0,1).join('')
    }
  }

console.log(max([17, 6, 3, 9, 12]))
console.log(max('differentletterjcbsasdfjlk'))


function min(xx) {
    if(xx === xx.toString()){
    return xx.split('').sort().slice(0,1).join('')
    } else {
        return xx.sort((a, b) => { return a - b }).slice(0,1).join('')
    }
}
console.log(min('bksca'))
console.log(min([1,5,3,6,8,756,34,0]))