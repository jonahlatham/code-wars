// https://www.codewars.com/kata/check-the-exam/train/javascript

let answers = ['a', 'b', 'c', 'd', 'e', 'f']
let mine = ['b', 'b', 'c', 'i', 'b', 'f']

function checkExam(array1, array2) {
    const answer = array1.reduce((r, e, i, a) => {
        if (e === array2[i]) {
            r += 4
        } else if (e !== array2[i] && array2[i] !== '') {
            r -= 1
        }
        return r
    }, 0)
    return answer > 0 ? answer : 0
}

console.log(checkExam(answers, mine))