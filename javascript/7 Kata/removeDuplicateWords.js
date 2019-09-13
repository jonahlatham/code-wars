
let str = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

function removeDuplicateWords(s) {
    let arr = []
    let strLoop = s.split(' ')
    let newCrap = strLoop.filter((e, i) => {
        if (arr.includes(e)) {
            return false
        } else {
            arr.push(e)
        }
    })
    return arr.join(' ')
}

console.log(removeDuplicateWords(str))