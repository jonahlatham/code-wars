// https://www.codewars.com/kata/two-oldest-ages-1/train/javascript

function twoOldestAges(ages) {
    let arr = []
    let age = ages.sort((a, b) => { return a - b }).map((e, i) => {
        return e
    })
    arr.push(age[age.length-2], age[age.length-1])
    return arr
}

console.log(twoOldestAges([13, 2, 40, 5, 23, 66, 21, 69, 42, 5, 4, 45, 32]))