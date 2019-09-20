
let string = '(((())(()'

const fixParentheses = (str) => {
    // let leftSide = str.split('').reduce((r, e) => {
    //     if (e === '(') {
    //         r += 1
    //         console.log(r)
    //     }
    //     return r
    // }, 0)
    // let rightSide = str.split('').reduce((r, e) => {
    //     if (e === ')') {
    //         r += 1
    //         console.log(r)
    //     }
    //     return r
    // }, 0)
    // return str.split('').map((e, i) => {
    //     if (leftSide > rightSide) {
    //         str.split('').push(')')
    //     } else {
    //         str.split('').unshift('(')
    //     }
    //     return str
    // })
};

console.log(fixParentheses(string))