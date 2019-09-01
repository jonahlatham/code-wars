
let arr = [2, 6, 2, 7, 8, 5]


function minimumSteps(numbers, value) {
    let array = numbers.sort((a, b) => { return a - b })
    console.log(array)
    let sum = 0
    let i = 0
    while (sum<value){
        console.log(array[i])
        sum+=array[i]
        i++
    }
        return i-1
}

console.log(minimumSteps(arr, 10))