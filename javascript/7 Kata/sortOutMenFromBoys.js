// https://www.codewars.com/kata/sort-out-the-men-from-boys-1/train/javascript

let array = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let str = [1234, 534, 534, 121, 42, 64, 9, 11, 21, 342]

function menFromBoys(arr) {
    let men = []
    let boys = []
    let loop = arr.map((e, i) => {
        if (e % 2 === 0) {
            men.push(e)
        } else {
            boys.push(e)
        }
    })
    men.sort((a, b) => { return a - b })
    let uniqueMen = [...new Set(men)]
    boys.sort((a, b) => { return b - a })
    let uniqueBoys = [...new Set(boys)]
    return uniqueMen.concat(uniqueBoys)
}
console.log(menFromBoys(array))