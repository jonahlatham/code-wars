// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e


function repeatStr (n, s) {
    let answer = 0
    for(i=1; i<=n; i++){
        console.log(i)
        answer += s
    }
    return answer.slice(1)
}

  console.log(repeatStr(5, 'hello'))