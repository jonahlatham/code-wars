let arr = ['a', 'b', 'c', 'd', 'f']

function findMissingLetter(array) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let newLetters = letters.split('')
    let isIt = array[0].indexOf()
    console.log(isIt)
    let newNewNewArr = newLetters.filter((e, i) => {
        if (array.includes(e)) {
            return false
        } else {
            return true
        }
    })
    return newNewNewArr.slice(0, array[0].indexOf())[0]
}

console.log(findMissingLetter(arr))