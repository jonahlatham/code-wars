// https://www.codewars.com/kata/count-the-monkeys/train/javascript

function monkeyCount(n) {
    let answer = []
    for(i=1;i<=n;i++){
        answer.push(i)
    }
    return answer
    }

    console.log(monkeyCount(7))