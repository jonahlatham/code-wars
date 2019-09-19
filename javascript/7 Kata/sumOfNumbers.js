

function GetSum(a, b) {
    let arr = []
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            arr.push(i)
        }
    } else {
        for (let i = b; i <= a; i++) {
            arr.push(i)
        }
    }
    return arr.reduce((r, e) => {
        r += e
        return r
    }, 0)
}

console.log(GetSum(0, -1))