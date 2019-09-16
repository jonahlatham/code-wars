
let arr = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5]

function countPositivesSumNegatives(input) {
    let arr = []
    let arrPos = input.reduce((r, e, i) => {
        if (e > 0 && e !== null) {
            r.push(e)
        }
        return r
    }, [])
    let arrNeg = input.reduce((r, e, i) => {
        if (e <= 0 && e !== null) {
            r += e
        }
        return r
    }, 0)
    arr.push(arrPos.length, arrNeg)
    return arr
}

console.log(countPositivesSumNegatives(arr))