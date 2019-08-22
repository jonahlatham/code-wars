let arr = [1, 2, 4, 2, 6, 3]
function getAverage(marks) {
    let stuff = marks.reduce((r, e, i) => {
        r += e
        return r
    },0)
    return Math.floor(stuff/marks.length)
}

console.log(getAverage(arr))