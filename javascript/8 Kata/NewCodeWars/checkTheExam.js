// https://www.codewars.com/kata/check-the-exam/train/javascript

let answers = ['a', 'b', 'c', 'd', 'e', 'f']
let mine = ['b', 'b', 'c', 'i', 'b', 'f']

function checkExam(array1, array2) {
    let art = array2.filter((e, i) => {
        if(array2.includes(array1[e])){
            return i
        }
        })
        return art
    }

console.log(checkExam(answers, mine))