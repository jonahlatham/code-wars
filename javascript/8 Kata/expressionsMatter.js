function expressionMatter(a, b, c) {
    let arr = []
    arr.push(a * (b + c))
    arr.push(a * b * c)
    arr.push(a + b * c)
    arr.push(a + b + c)
    arr.push((a + b) * c)
    arr.sort((a, b) => { return a - b })
    return arr[arr.length - 1]
}

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
console.log(expressionMatter(1, 2, 3))