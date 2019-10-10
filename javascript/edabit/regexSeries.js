
function containsNum(str) {
    if (/\d/.test(str) === true) {
        return true
    } else {
        return false
    }
}

console.log(containsNum('nu2mb3r'))
console.log(containsNum('numbr'))