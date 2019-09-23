
function addLetters(...letters) {
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    const arr = alph.split('')
    let reducer = arr.reduce((r, e, i) => {
        if (letters.sort().includes(e)) {
            r += (i + 1)
        }
        return r
    }, 0)
    while (reducer > 26) {
        reducer -= 26
    }
    return letters[0] === undefined ? 'z' : arr[reducer - 1]
}

console.log(addLetters('a', 'z', 'd'))