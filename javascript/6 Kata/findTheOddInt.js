// https://www.codewars.com/kata/find-the-odd-int/train/javascript

let array = [1, 2, 1, 22, 3, 4, 2, 1, 2, 1]

function findOdd(A) {
    let answer = 0
    let art = A.map((e, i) => {
        if (e===1) {
            return answer += 1
        }
    })
    return answer
}

console.log(findOdd(array))