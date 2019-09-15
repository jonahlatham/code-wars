let arr = [1, 2, 3, 4, 5]

function maxProduct(numbers, size) {
    let slce = numbers.sort((a, b) => { return a - b }).slice(numbers.length - size)
    return slce.reduce((r,e,i)=>{
        r*=e
        return r
    },1)
}

console.log(maxProduct(arr, 3))