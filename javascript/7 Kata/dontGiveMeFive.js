

function dontGiveMeFive(start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
        if (!i.toString().split('').includes('5')) {
            arr.push(i)
        }
    }
    return arr.length
}
console.log(dontGiveMeFive(1, 16))