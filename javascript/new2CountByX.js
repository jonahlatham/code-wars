
const countByX = (x, arr) => {

    for(i=0; i<=10; i++){
        console.log(i)
        arr.push(i * x)
    }
    return arr
}

console.log(countByX(5, []));