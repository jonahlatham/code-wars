
let string = 'ac2dc'

function reverseLetter(str) {
    let s = str.split('').filter((e) => {
        if (/^[a-z]+$/i.test(e)) {
            return true
        } else {
            return false
        }
    })
    return s.join('').split('').reverse().join('')
}

console.log(reverseLetter(string))