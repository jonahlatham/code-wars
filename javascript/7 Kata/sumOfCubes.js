
function sumCubes(n){
    let num = 0
    for(let i = 1; i<=n; i++){
        num += Math.pow(i, 3)
    }
    return num
  }

  console.log(sumCubes(3))