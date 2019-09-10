let arr = ['good', 'bad', 'bad', 'bad']
let arr1 = ['good', 'good', 'good', 'bad']
function well(x) {
    let loopArr = x.reduce((r, e, i) => {
        if (e.includes('good')) {
            return r += 1
        }
        return r
    }, 0)
    if (loopArr < 1) {
        return 'Fail!'
    } else if (loopArr > 0 && loopArr <= 2) {
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
}

console.log(well(arr))