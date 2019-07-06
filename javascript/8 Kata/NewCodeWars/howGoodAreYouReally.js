function betterThanAverage(classPoints, yourPoints) {
    let point = yourPoints/classPoints.length 
    let mapper = classPoints.reduce((r,e,i) => {
        r+=e
        return r/classPoints.length
    },0)
if(mapper<point){
    return true
} else {
    return false
}
}
console.log(betterThanAverage(([100, 40, 34, 57, 29, 72, 57, 88], 75))