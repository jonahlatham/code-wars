
let string = 'cab'
let stn = 'abc'

// function solution(str, ending) {
//     let strine = str.split('').map((e, i) => {
//         return e
//     })
//     if (strine.slice(strine.length - ending.length, strine.length).join('') === ending) {
//         return true
//     } else {
//         return false
//     }
// }

function solution(str, ending){
    return str.endsWith(ending);
  }

console.log(solution(string, 'ab'))