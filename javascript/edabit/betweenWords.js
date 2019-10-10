function isBetween(first, last, word) {
    let arr = []
    arr.push(first, word, last)
    arr.sort()
    if (arr.indexOf(first) < arr.indexOf(word) && arr.indexOf(word) < arr.indexOf(last)) {
        return true
    } else {
        return false
    }
}

console.log(isBetween('apple', 'zebra', 'latham'))