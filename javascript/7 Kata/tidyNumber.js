

let arr = [1, 4, 2, 6, 4]
let num = 23421
console.log(num.toString().split(''))

function tidyNumber(n) {
    let isIt = n.toString().split('').map((e,i)=>{
        if(n[i]>n[i+i]){
            return false
        } else {
            return true
        }
    })
    if(isIt.includes(true)){
        return false
    } else {
        return true
    }
}

console.log(tidyNumber(num))