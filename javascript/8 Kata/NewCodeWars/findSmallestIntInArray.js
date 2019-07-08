let array = [ 2, 5, 87, 3, 1, - 4, - 23, 64, 54, 0, 88]
function smallInt(arr){
return arr.sort((a, b) => a - b)[0]
}
console.log(array.sort())
console.log(smallInt(array))