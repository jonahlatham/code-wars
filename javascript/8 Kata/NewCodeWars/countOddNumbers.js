// https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript

let num = 14

function oddCount(n){
    if(n%2!==0){
        return (n-1)/2
    } else {
        return (n/2)
    }
  }

  console.log(oddCount(num))