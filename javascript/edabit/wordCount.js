let string = 'how many words is here?'

function countWords(str) {
    let newStr = str.split(' ')
    return newStr.length
}
console.log(countWords(string))