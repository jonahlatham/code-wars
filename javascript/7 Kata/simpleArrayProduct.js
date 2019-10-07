let array = [[1, 2], [3, 6], [9, 3]]

function solve(arr) {
    const positive = arr.map((e, i) => {
        return e = e.reduce((r, j) => {
            if (j > r[0]) {
                r[0] = j
            }
            return r
        }, [0])
    }).reduce((r, e) => {
        r *= e[0]
        return r
    }, 1)
    const negative = arr.map((e, i) => {
        return e = e.reduce((r, j) => {
            if (j < r[0]) {
                r[0] = j
            }
            return r
        }, [0])
    }).reduce((r, e) => {
        r *= e[0]
        return r
    }, -1)
    console.log(positive)
    console.log(negative)
    return positive > (negative*-1) ? positive : (negative*-1)
}

console.log(solve([[1, 2], [3, 4]]))
console.log(solve([[10, -15], [-1, -3]]));
console.log(solve([[-1, 2, -3, 4], [1, -2, 3, -4]]));
console.log(solve([[-11, -6], [-20, -20], [18, -4], [-20, 1]]));
console.log(solve([[14, 2], [0, -16], [-12, -16]]));
console.log(solve([[-3, -4], [1, 2, -3]]));
console.log(solve(array))