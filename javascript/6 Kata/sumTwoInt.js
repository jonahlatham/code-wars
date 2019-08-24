
// function add(x, y){
//     sum = Math.log2(2**x * 2**y);
//     return sum
// }

// console.log(add(1,2))


let add = function (x, y) {
    if (y === 0) {
        return x
    } else {
        return add(x ^ y, (x & y) << 1)
    }
}

console.log(add(7,3))