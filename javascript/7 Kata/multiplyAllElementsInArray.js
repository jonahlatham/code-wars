let array = [1, 2, 3, 4, 5]

function multiplyAll(arr, num) {
    return arr.reduce((r, e, i) => {
        r.push(e * num)
        return r
    }, [])
}

console.log(multiplyAll(array, 2))