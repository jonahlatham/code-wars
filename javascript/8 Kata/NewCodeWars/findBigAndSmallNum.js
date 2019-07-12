let array = [9,6,3,2,5]

function minMax(arr) {
    arr.sort()
    let min = arr.slice(0, 1)
    let max = arr.slice(arr.length-1)
    return min.concat(max)
}

console.log(minMax(array))