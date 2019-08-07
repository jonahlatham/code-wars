// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

let word = 'hello josh'

function wave(str) {
    let w = str.split('')
    return w.reduce((r, e, i, a) => {
        if (e !== ' ') {
            let first = w.slice(0, i)
            let last = w.slice(i + 1, w.length)
            r.push([...first, e.toUpperCase(), ...last].join(''))
        }
        return r
    }, [])
}

console.log(wave(word))