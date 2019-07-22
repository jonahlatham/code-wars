// https://www.codewars.com/kata/sum-of-array-averages/train/javascript

let array = [[1, 2, 3, 4, 5], [1, 2, 4, 8, 9, 6, 45]]

const sumAverage = (arr) => {
    let result = arr.map((e, i) => {
        return e.reduce((r, e, i, a) => {
            console.log(a.length)
            r += e/a.length
            return r
        }, 0)
    })
    let last = result.reduce((r, e, i, a) => {
       return r += e
    }, 0)
    return Math.floor(last)
}

console.log(sumAverage(array))