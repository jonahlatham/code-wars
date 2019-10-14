
function Go(num) {
    let arr = []
    for (let i = 0; i <= num; i++) {
        arr.push('-')
    }
    return arr.join('')
}

console.log(Go(5))