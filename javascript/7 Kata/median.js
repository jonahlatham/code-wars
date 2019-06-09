// https://www.codewars.com/kata/5864eb8039c5ab9cd400005c


let arr=[1,2,13,4,5,6,7,8,9,0,43,56,32,44,78,21,3,-4,81,11]
let x = [2,1,3,5,4,6,7]
function order(a,b){
    return a-b
}
function median(array) {
    let art = array.length/2
    if (array.length % 2 === 0){
    array.sort(order)
    return (array[art - 1] + array[art])/2
    } else {
        array.sort(order)
        return array[art - .5]
    }
}
console.log(x.sort())
console.log(median(x))