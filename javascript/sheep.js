
//          MINE WRONG!!!

// const sheep = ["sheep", "sheep", "sheep", "sheep", "wolf", "sheep"];

// const warnSheep = (obj) => {
//     let answer = []
//     for (i = 0; i < obj.length; i++) {
//         if ("wolf" >= sheep[i]){
//             return "Pls go away and stop eating my sheep"
//         } else {
//             return "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//         }
//     }
//     return answer
// }


// console.log(warnSheep(sheep[i]))



//      CORRECT NOT MINE!!!

function warnTheSheep(q) {
    return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
  }


