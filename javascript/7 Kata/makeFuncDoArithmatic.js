// https://www.codewars.com/kata/make-a-function-that-does-arithmetic/train/javascript

function arithmetic(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b
            break
        case 'subtract':
            return a - b
            break
        case 'multiply':
            return a * b
            break
        case 'divide':
            return a / b
            break
    }
}

console.log(arithmetic(5, 5, 'multiply'))