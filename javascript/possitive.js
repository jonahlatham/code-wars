// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const x = [0, -2, 3, -6, -1, 7]

function positiveSum(arr) {
    let answer = 0
  for (i=0; i < arr.length; i++) {
      if (arr[i] > 0){
        answer += arr[i]
      }
  }
  return answer
}

console.log(positiveSum(x))



// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }

// https://www.codewars.com/kata/sum-of-positive/train/javascript