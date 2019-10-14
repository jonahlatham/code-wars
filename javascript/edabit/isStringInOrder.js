
function isInOrder(str) {
    if (str === str.split('').sort().join('')) {
        return true
    } else {
        return false
    }
}

console.log(isInOrder('abc'))
console.log(isInOrder('adbhc'))