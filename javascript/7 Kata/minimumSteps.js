
let arr = [2, 6, 2, 7, 8, 5]

function minimumSteps(numbers, value) {
    let array = numbers.sort((a, b) => { return a - b })
    let num = array.reduce((r,e,i,a)=>{
        if(r+=e>=value){
            return i+1
        }
    },0)
    return num
}

console.log(minimumSteps(arr, 10))