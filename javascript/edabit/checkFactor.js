function checkFactors(factors, num) {
    let newArr = factors.map((e, i) => {
        if (num % e === 0) {
            return true
        } else {
            return false
        }
    })
    if (newArr.includes(false)) {
        return false
    } else {
        return true
    }
}

console.log(checkFactors([2, 3, 4], 12))