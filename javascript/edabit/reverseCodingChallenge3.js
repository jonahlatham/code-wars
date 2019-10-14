

function mysteryFunc(arr, num) {
    return arr.reduce((r, e) => {
        r.push(e % num)
        return r
    }, [])
}

console.log(mysteryFunc([5, 7, 8, 2, 1], 2))