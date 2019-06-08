let x = [1,4,'5','8',4,'9']

function sumMix(arr){
    let sums = arr.reduce((r,e,i) => {
        return r += Number(e)
    }, 0)
    return sums
}

console.log(sumMix(x))
