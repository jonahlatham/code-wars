
let array = [1, 3, 65, 3, 5, 2, 78, 54]

function sumOrProduct(arr, n) {
    let sortedArr = arr.sort((a, b) => { return a - b })
    console.log(sortedArr)
    let sum = sortedArr.slice(sortedArr.length - n, sortedArr.length).reduce((r, e) => {
        return r += e
    }, 0)
    let product = sortedArr.slice(0, n - sortedArr.length).reduce((r, e) => {
        return r *= e
    }, 1)
    if (sum > product) {
        return 'sum'
    } else if (product > sum) {
        return 'product'
    } else {
        return 'same'
    }
}

console.log(sumOrProduct(array, 3))