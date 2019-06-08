// https://www.codewars.com/kata/53d16bd82578b1fb5b00128c

let x = .7

function grader(score) {
    if (score>1||score<0.6) return 'F'
    if (score<0.7) return 'D'
    if (score<0.8) return 'C'
    if (score<0.9) return 'B'
    return 'A'
  }
  console.log(grader(x))



