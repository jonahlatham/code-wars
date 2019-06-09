
    x = [1, 2, 3, 4, 5, 6];

    const meanCalc = (arr) => {
    let mean = arr.reduce((r,e,i,a) => {
        console.log(e)
        return r+=e
    },0)
    return mean
}
console.log(meanCalc(x))