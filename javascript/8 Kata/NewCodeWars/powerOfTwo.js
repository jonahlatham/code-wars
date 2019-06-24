// https://www.codewars.com/kata/534d0a229345375d520006a0

function isPowerOfTwo(n){
    if(Math.sqrt(n)%2 === 0) {
        return true
    } else {
        return false
    }
  }
  
    console.log(Math.sqrt(2048))
    console.log(2048*2)
    console.log(isPowerOfTwo(2048))