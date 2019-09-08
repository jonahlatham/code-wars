let arr = [2, 3, 4, 5, 6, 7, 8]

function replacement(a) {
    a.push(1)
    let newArr = a.sort((a, b) => { return a - b })
    return newArr.slice(0, newArr.length - 1)
}

console.log(replacement(arr)) 