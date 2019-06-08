// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/solutions

let x = 'jonah latham'

function nickName(arr) {
    return arr.split(' ')[0][0].toUpperCase() + '.' + arr.split(' ')[1][0].toUpperCase() + '.'
}
console.log(nickName(x))