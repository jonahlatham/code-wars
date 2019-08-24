
let array = [4, -2, 8, 12, 65, 34, -91, -16, 6, 5, 1, 0, -9, 3, 7]

function nthSmallest(arr, pos) {
    let ordArr = arr.sort((a, b) => { return a - b })
    return ordArr[pos-1]
}

console.log(nthSmallest(array, 3))