
let num = 17492749

function maxNumber(n) {
    return Number(n.toString().split('').sort().reverse().join(''))
}

console.log(maxNumber(num))