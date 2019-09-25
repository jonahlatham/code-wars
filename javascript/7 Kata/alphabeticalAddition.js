
function addLetters(...letters) {
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    const arr = alph.split('')
    const lettersOpp = letters.reduce((r, e) => {
        r[e] ? r[e]++ : r[e] = 1
        return r
    }, {})
    console.log(lettersOpp)
    let reducer = Object.keys(lettersOpp).reduce((r, e, i) => {
        const increaseNum = arr.indexOf(e) + 1
        console.log(increaseNum)
        r += increaseNum * lettersOpp[e]
        return r
    }, 0)
    while (reducer > 26) {
        reducer -= 26
    }
    return letters[0] === undefined ? 'z' : arr[reducer - 1]
}

console.log(addLetters('a', 'a', 'a', 'd', 'z', 'z', 'd'))