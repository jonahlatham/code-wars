

function highAndLow(numbers) {
    let numArr = numbers.split(' ')
    let arr = []
    let newArr = numArr.reduce((r, e, i) => {
        if (e !== ' ') {
            r.push(e)
        }
        return r.sort((a, b) => { return a - b })
    }, [])
    arr.push(newArr[newArr.length - 1], newArr[0])
    return arr.join(' ')
}

console.log(highAndLow('1 20 -3 4 -5 6'))