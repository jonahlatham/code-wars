

function oddest(a) {
    let sortedArr = a.sort((a, b) => { return a - b }).reduce((r,e, i) => {
        if (e % 2 !== 0) {
            r.push(e)
        }
        return r
    },[])
    return sortedArr.pop()
}

console.log(oddest([1, 6, 7, 9, 2, 3]))