// https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

function basicOp(operation, value1, value2) {
    switch (operation) {
        case 'add':
            return value1 + value2;
        case 'subtract':
            return value1 - value2;
        case 'multiply':
            return value1 * value2;
        case 'divide':
            return value1 / value2;
        default:
            return 0
    }
}
console.log(basicOp('divide', 2, 2))