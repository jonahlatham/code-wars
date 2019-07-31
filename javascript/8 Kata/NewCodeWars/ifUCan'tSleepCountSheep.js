// https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript

let countSheep = function (num) {
    let arr=''
    for (let i = 1; i <= num; i++) {
       arr += `${i} sheep... `
    }
    return arr
}
console.log(countSheep(3))

