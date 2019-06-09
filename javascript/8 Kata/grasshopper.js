//   https://www.codewars.com/kata/55d24f55d7dd296eb9000030

function summation(num) {
  answer = 0
    for(i=1;i<=num; i++){
      console.log(i)
      answer += i
    }
    return answer
  }
  console.log(summation(5))
