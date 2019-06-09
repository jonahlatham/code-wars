let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

function adder(arr) {

    let adds = arr.reduce((r,e,i,a) => {
        return r += e
    }, 0)
    return adds
}
console.log(adder(arr1))