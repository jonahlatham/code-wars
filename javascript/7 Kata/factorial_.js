function factorial(n) {
    let arr = []
    if(n>0 && n<12){
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr.reduce((r, e) => {
        r *= e
        return r
    }, 1)
} else {
        throw new RangeError;
    }
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))