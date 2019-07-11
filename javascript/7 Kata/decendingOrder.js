let str = 15243
function descendingOrder(n){
    let num = n.toString().split('').sort().reverse().join('')
    return Number(num)
  }
  console.log(descendingOrder(str))
