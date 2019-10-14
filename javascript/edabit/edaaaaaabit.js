
// function howManyTimes(num) {
//     let arr = []
//     for (let i = 1; i <= num; i++) {
//         arr.push('a')
//     }
//     let newArr = arr.join('')
//     return `Ed${newArr}bit`
// }
function howManyTimes(num) {
    return `Ed${'a'.repeat(num)}bit`
}

console.log(howManyTimes(5))