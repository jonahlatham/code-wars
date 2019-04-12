// My answer        WRONG

// const  sumIt = (obj) => {
//     let num = [1,2,3,4,5,6,7,8,9,10]
//     for (i = 0; i < obj.length; i++) {
//         num += obj[i]
//     }
//     return sumIt
// }

// console.log(sumIt(1), 10)


// CORRECT ANSWER!!! not mine...

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }

//   https://www.codewars.com/kata/55d24f55d7dd296eb9000030