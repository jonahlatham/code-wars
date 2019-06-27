// https://www.codewars.com/kata/write-a-code-golf-scoring-function/train/javascript

let str = 'hel lo wo ____r l d '

// function golfScore(code) {
//     let count1 = (code.match(/ /g)).length;
//     let count2 = (code.match(/_/g)).length;
//     return count1 + count2
// }

// console.log(golfScore(str))


function golfScore(code) {
    let count1 = str.split(/ /g).length - 1
    let count2 = str.split(/_/g).length - 1
    return count1 + count2
}
console.log(golfScore(str))