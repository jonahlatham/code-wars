// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a

function isDivideBy(number, a, b) {
    if(number % a === 0 && number % b === 0){
        return true
    } else {
        return false
    }
  }

  console.log(isDivideBy(12,3,4))