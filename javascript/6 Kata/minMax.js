// https://www.codewars.com/kata/min-or-max-of/train/javascript

function max(xx) {
    const formedArray = Array.from(xx)
    let shouldCheckInterior = false
    if (Array.isArray(xx)) {
        shouldCheckInterior = typeof xx[0] === 'string'
    }
    return typeof xx !== 'string' && !shouldCheckInterior ? formedArray.sort((a, b) => { return b - a })[0] : formedArray.sort()[xx.length - 1]
}

function min(xx) {
    const formedArray = Array.from(xx)
    let shouldCheckInterior = false
    if (Array.isArray(xx)) {
        shouldCheckInterior = typeof xx[0] === 'string'
    }
    return typeof xx !== 'string' && !shouldCheckInterior ? formedArray.sort((a, b) => { return a - b })[0] : formedArray.sort()[0]
}

console.log(max([17, 6, 3, 9, 12]))
console.log(max('terjczfjlk'))
console.log(max(['d', 'a', 'b', 'f', 'c']))

console.log(min('bksca'))
console.log(min([1, 5, 3, 6, 8, 756, 34, 0]))