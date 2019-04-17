
// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	'F'
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:

// grader(0.9) == 'A'
// grader(0.3) == 'F'
// grader(234) == 'F'
// grader(0.75) == 'C'


// MINE!!!!! I FEEL LIKE THIS Is RIGHT...

// const gradeForDays = (x) => {
//     if (x >= .9) {
//         return "A"
//     } else if (x >= .8) {
//         return "B"
//     } else if (x >= .7) {
//         return "C"
//     } else if (x >= .6) {
//         return "D"
//     } else {
//         return "You effing Failure!!!"
//     }
// }

// console.log(gradeForDays(1))




//NOT MINE...THEY CAN GO TO HELL

function grader(score) {
    if (score>1||score<0.6) return 'F'
    if (score<0.7) return 'D'
    if (score<0.8) return 'C'
    if (score<0.9) return 'B'
    return 'A'
  }




// https://www.codewars.com/kata/53d16bd82578b1fb5b00128c