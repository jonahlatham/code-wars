// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

let arr = [ 3,4,67,3,34,66,541,53]
let arr1 = [5,1,-4,-5,6,3,-8]

function sortNumber(a, b) {
    return a - b;
  }
    function findSmallestInt(args){
       return args.sort(sortNumber)[0]
    }

  console.log(findSmallestInt(arr1))