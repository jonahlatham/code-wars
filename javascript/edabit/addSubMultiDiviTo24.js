
function operation(num1, num2) {
    switch (24) {
        case num1 + num2:
            return 'add'
        case num1 - num2:
            return 'sub'
        case num1 * num2:
            return 'multi'
        case num1 / num2:
            return 'divi'
        default:
            return null
    }
}

console.log(operation(15, 9))
console.log(operation(26, 2))
console.log(operation(11, 11))

