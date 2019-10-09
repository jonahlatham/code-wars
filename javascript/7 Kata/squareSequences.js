

function squares(x, n) {
    let arr = []
    for(let i = 0; i<n; i++){
        // arr.push(Math.pow(i,2))
        console.log(x*(i))
        if(i===0){
            arr.push(x)
        } else {
            arr.push(Math.pow(arr[i-1],2))
        }
    }
    return arr
}

console.log(squares(2, 5))