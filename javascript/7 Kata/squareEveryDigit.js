
function squareDigits(num){
    let number = num.toString().split('').map((e,i)=>{
        return Math.pow(Number(e),2)
    }).join('')
    return Number(number)
  }

  console.log(squareDigits(1992))