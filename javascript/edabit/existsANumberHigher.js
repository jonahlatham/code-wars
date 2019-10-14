
function existsHigher(arr, n) {
    console.log(arr, n)
    let arr1 = arr.sort((a, b) => { return a - b })
    let newArr = arr1.map((e) => {
        if (arr1[arr1.length - 1] >= n) {
            return true
        } else {
            return false
        }
    })
    return newArr[0]
}

console.log(existsHigher([5, 3, 15, 22, 4], 10))