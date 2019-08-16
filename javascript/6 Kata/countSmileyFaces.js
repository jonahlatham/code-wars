let array = [';)', ':)', 'jk']
function countSmiles(arr) {
    let answer = 0
    let arraySplit = arr.map((e, i) => {
        if (e.includes(';)')) {
            return answer += 1
        } else if (e.includes(';D')){
            return answer += 1
        } else if (e.includes(';-)')){
            return answer += 1
        } else if (e.includes(';-D')){
            return answer += 1
        } else if (e.includes(':)')){
            return answer += 1
        } else if (e.includes(':D')){
            return answer += 1
        } else if (e.includes(':-)')){
            return answer += 1
        } else if (e.includes(':~D')){
            return answer += 1
        } else if (e.includes(';~D')){
            return answer += 1
        } else if (e.includes(':~)')){
            return answer += 1
        } else if (e.includes(';~)')){
            return answer += 1
        } 
    })
    return answer
}

console.log(countSmiles(array))