// https://www.codewars.com/kata/vowel-count/train/javascript
 
let string = 'hello world' //3

function getCount(str) {
    var vowelsCount = 0;

    return str.split('').forEach((num) => {
        if (num === 'a') {
            return vowelsCount += 1
        } else if (num === 'e') {
            return vowelsCount += 1
        } else if (num === 'i') {
            return vowelsCount += 1
        } else if (num === 'o') {
            return vowelsCount += 1
        } else if (num === 'u') {
            return vowelsCount += 1
        }
    })
}

console.log(getCount(string))