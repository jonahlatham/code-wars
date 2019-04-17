// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


//          MINE!!!

// const getMean = (arr) => {
//     let array = [1,2,3,4,5,6,7,8,9,10]
//     let answer = 0
//     for (i=0; i < arr.length; i++) {
//         answer += arr[i]
//     }
// }

// console.log(getMean(answer))





//  THEIRS

// function getAverage(marks){

//     // calculates total number of marks
//     var total = 0;
//     for(var i = 0; i < marks.length; i++){
//       total += marks[i];
//     }
    
//     /* returns total number of marks divided by number of marks
//        rounded down to nearest integer */
//     return Math.floor(total / marks.length);
//   }

//redo

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function mean {
    let answer = 0;
for ( i = 0; i < arr.length; i++) {

    answer += arr[i] 
}
return answer/arr.length
}

console.log(mean(arr))



















