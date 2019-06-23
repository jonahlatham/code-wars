// https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript

function oddCount(n) {
    let answer = []
    for (i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            answer.push(i)
        }
    }
    return answer.length
}

console.log(oddCount(7))