

function divisibleBy(numbers, divisor) {
    return numbers.filter((e, i) => {
        if(e%divisor===0){
            return e
        }
    })
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))