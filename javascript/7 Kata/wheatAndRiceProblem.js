
function squaresNeeded(grains) {
    return Math.ceil(Math.log2(grains+1));
}

console.log(squaresNeeded(0))
console.log(squaresNeeded(1))
console.log(squaresNeeded(2))
console.log(squaresNeeded(3))
console.log(squaresNeeded(4))