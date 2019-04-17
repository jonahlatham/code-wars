// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F


function abbrevName(obj){
    const wordArr = obj.split(" ")
    let firstWord = wordArr[0].charAt(0).toUpperCase() + "." + wordArr[1].charAt(0).toUpperCase()
    return firstWord;
}

// BETTER ANSWER

// function abbrevName(name){
//     return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
//   }


// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/solutions

