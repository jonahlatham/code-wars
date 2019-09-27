const factorial = n => {
    let arr = []
    let num = 1
    for (let i = n; i >= 1; i--) {
        num*=i
        arr.push(num)
    }
    return arr[arr.length-1]
};

console.log(factorial(3))