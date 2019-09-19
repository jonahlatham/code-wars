// https://www.codewars.com/kata/write-a-code-golf-scoring-function/train/javascript

let str = '  hello world 345  my na me is jonah'
function golfScore(code) {
    let filtCode = code.trim().split(' ').filter((e, i) => {
        if (/[a-z]/.test(e.toLowerCase()) || /[0-9]/.test(e.toLowerCase()) || e !== '') {
            return true
        } else {
            return false
        }
    })
    console.log(filtCode)
    return filtCode.length
}

console.log(golfScore(str))