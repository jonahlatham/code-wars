// https://www.codewars.com/kata/sum-of-positive/train/javascript

const x = [0, -2, 3, -6, -1, 7]

function positiveSum(arr) {
  let filts = arr.filter((e,i) => {
    if(e < 0){
      console.log(i)
      return e[i]
    } else {
      return 'you pooped the bed'
    }
  })
  return filts.reduce((r,e,i) => {
    return r+=e
  },0)
}

console.log(positiveSum(x))
