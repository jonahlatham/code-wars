const sequenceSum = (begin, end, step) => {
    let arr = []
    for (let i = begin; i <= end; i++) {
        arr.push(i * step)
    }
    return arr.reduce((r, e) => {
        r += (e - step)
        console.log(e)
        return r
    }, 0)
};

console.log(sequenceSum(1, 10, 2))  