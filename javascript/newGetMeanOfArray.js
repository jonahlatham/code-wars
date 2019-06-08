
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr1 = [ 1, 2, 3]


function mean(arr) {

    let means = arr.reduce((r,e,i,a) => {
        return r *= e/arr.length
    },1)
    return means
}

console.log(mean(arr1))



















