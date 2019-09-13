let a1 = [1, 2, 3, 4, 5]
let a2 = [2, 5, 3, 4, 7]

function arrayPlusArray(arr1, arr2) {
    let ar1 = arr1.reduce((r, e, i) => {
        return r += e
    }, 0)
    let ar2 = arr2.reduce((r, e, i) => {
        return r += e
    }, 0)
    return ar1 + ar2
}

console.log(arrayPlusArray(a1, a2))