// https://www.codewars.com/kata/596a5e32634dad2a3c00003f

let string = 'hello world'

var makeEveryLetterAfterXCaps = function (str, letter) {
    let num = str.indexOf(letter).length
    return num
}
console.log(string.search(/l/g))
console.log(string.indexOf(/l/g).length)
console.log(makeEveryLetterAfterXCaps(string, 'l'))