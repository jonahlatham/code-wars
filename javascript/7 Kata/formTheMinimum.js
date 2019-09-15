let arr = [9, 2, 5, 7, 3, 1, 4, 6, 8, 1, 2, 3, 9]

function minValue(values) {
 const numbers = values
 let unique = [...new Set(numbers)]
 return Number(unique.sort((a,b)=>{return a-b}).join(''))
}

console.log(minValue(arr))